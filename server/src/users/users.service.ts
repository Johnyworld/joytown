import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { UserRequestDto } from './dto/user.request.dto';
import * as bcrypt from 'bcrypt';
import { UsersRepository } from './users.repository';
import { UserSendEmailDto } from './dto/user.sendEmail.dto';
import { MailerService } from '@nestjs-modules/mailer';

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

    await this.mailerService.sendMail({
      to: email,
      from: process.env.EMAIL_HOST_USER,
      subject: '이메일 인증 요청 메일입니다.', // Subject line
      html: '인증 코드 : ' + `<b>Code</b>`, // HTML body content
    });

    return true;
  }
}
