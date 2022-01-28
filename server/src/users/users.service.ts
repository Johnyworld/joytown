import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './users.schema';
import { UserRequestDto } from './dto/user.request.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async register(body: UserRequestDto) {
    const { email, name, password } = body;
    const isCatExists = await this.userModel.exists({ email });

    if (isCatExists) {
      throw new UnauthorizedException('User is aleady exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.userModel.create({
      email,
      name,
      password: hashedPassword,
    });

    return user.readOnlyData;
  }
}
