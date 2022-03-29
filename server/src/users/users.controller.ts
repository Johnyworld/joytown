import { Body, Controller, Get, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { UserRequestDto } from './dto/user.request.dto';
import { UserSendEmailDto } from './dto/user.sendEmail.dto';
import { UserValidatePasswordDto } from './dto/user.validatePassword.dto';
import { CurrentUser } from './user.decorator';
import { UsersService } from './users.service';

@Controller('/api/user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getCurrentUser(@CurrentUser() user) {
    return user.readOnlyData;
  }

  @Post()
  async register(@Body() body: UserRequestDto) {
    return await this.userService.register(body);
  }

  @Post('password')
  async sendEmail(@Body() body: UserSendEmailDto) {
    return await this.userService.sendEmail(body);
  }

  @Get('password')
  async checkValidatePassword(@Body() body: UserValidatePasswordDto) {
    return await this.userService.validatePassword(body);
  }

  // @Get('password')
  // async validateCode() {}

  // @Put('password')
  // async changePassword() {}
}
