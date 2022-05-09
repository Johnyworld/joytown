import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginRequestDto } from './dto/login.request.dto';

@Controller('/api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Body() body: LoginRequestDto) {
    return await this.authService.jwtLogin(body);
  }

  @Post('kakao')
  async kakaoAuthCallback(@Body() body) {
    return await this.authService.kakaoLogin(body);
  }
}
