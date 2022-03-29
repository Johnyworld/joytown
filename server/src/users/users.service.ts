import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { UserRequestDto } from './dto/user.request.dto';
import * as bcrypt from 'bcrypt';
import { UsersRepository } from './users.repository';
import { UserSendEmailDto } from './dto/user.sendEmail.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { UserValidateCodeDto } from './dto/user.validateCode.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly mailerService: MailerService,
  ) {}

  async register(body: UserRequestDto) {
    const { email, name, password } = body;
    const isUserExists = await this.usersRepository.existsByEmail(email);

    if (isUserExists) {
      throw new ConflictException('user is aleady exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.usersRepository.create({
      email,
      name,
      password: hashedPassword,
    });

    return user.readOnlyData;
  }

  async sendEmail(body: UserSendEmailDto) {
    const { email } = body;
    const user = await this.usersRepository.findUserByEmail(email);

    if (!user) {
      throw new NotFoundException('user not found');
    }

    const code = await this.usersRepository.createPasswordCode(user);

    await this.mailerService.sendMail({
      to: email,
      from: process.env.EMAIL_HOST_USER,
      subject: '이메일 인증 요청 메일입니다.', // Subject line
      html:
        '인증 코드 : ' +
        `<a href="${process.env.HOST_URL}/password-validate?c=${code}" target="_blank">비밀번호 재설정</a>`, // HTML body content
    });

    return true;
  }

  async validateCode(body: UserValidateCodeDto) {
    const { code } = body;
    const pw = await this.usersRepository.validateCode(code);
    if (!pw) {
      throw new NotFoundException('code is wrong');
    }
    return { expiredAt: pw.expiredAt };
  }
}
