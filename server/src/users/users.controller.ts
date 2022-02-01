import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { UserRequestDto } from './dto/user.request.dto';
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
}
