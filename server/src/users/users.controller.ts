import { Body, Controller, Post } from '@nestjs/common';
import { UserRequestDto } from './dto/user.request.dto';
import { UsersService } from './users.service';

@Controller('/api/user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async register(@Body() body: UserRequestDto) {
    return await this.userService.register(body);
  }
}
