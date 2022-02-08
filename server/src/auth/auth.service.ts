import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UsersRepository } from 'src/users/users.repository';
import { LoginRequestDto } from './dto/login.request.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import axios from 'axios';
import { randomCodeGenerator } from 'src/common/utils/generators';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}

  async jwtLogin(data: LoginRequestDto) {
    const { email, password } = data;

    // check if user exists
    const user = await this.usersRepository.findUserByEmail(email);
    if (!user) throw new NotFoundException('user is not exists');

    // check if password validate
    const isPasswordValidated: boolean = await bcrypt.compare(
      password,
      user.password,
    );
    if (!isPasswordValidated) {
      throw new ForbiddenException('password is incorrect');
    }

    // return
    const payload = { email, sub: user.id };
    const access = this.jwtService.sign(payload);
    return { access, ...user.readOnlyData };
  }

  async kakaoLogin(data: any) {
    // get kakao user information
    const { access_token } = data;
    const res = await axios.get('https://kapi.kakao.com/v2/user/me', {
      headers: { Authorization: `Bearer ${access_token}` },
    });
    const name = res.data?.properties?.nickname;
    const email = res.data?.kakao_account?.email;

    // check if user exists
    const user = await this.usersRepository.findUserByEmail(email);
    if (!user) {
      // join
      console.log('===== JOIN');
      const password = randomCodeGenerator();
      const newUser = await this.usersRepository.create({
        email,
        name,
        password,
      });
      const payload = { email, sub: newUser.id };
      const access = this.jwtService.sign(payload);
      return { access, ...newUser.readOnlyData };
    } else {
      // login
      console.log('===== LOGIN');
      const payload = { email, sub: user.id };
      const access = this.jwtService.sign(payload);
      return { access, ...user.readOnlyData };
    }
  }
}
