import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { randomCodeGenerator } from 'src/common/utils/generators';
import { UserRequestDto } from './dto/user.request.dto';
import { Password, User } from './users.schema';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    @InjectModel(Password.name) private readonly passwordModel: Model<Password>,
  ) {}

  async findUserByEmail(email: string): Promise<User | null> {
    const user = await this.userModel.findOne({ email });
    return user;
  }

  async findUserById(id: string): Promise<User | null> {
    const user = await this.userModel.findById(id).select('-password');
    return user;
  }

  async validateCode(code: string): Promise<Password | null> {
    const password = await this.passwordModel.findOne({ code });
    if (!password) return null;
    const now = new Date().toISOString();
    if (password.expiredAt < now) return null;
    return password;
  }

  async existsByEmail(email: string): Promise<boolean> {
    const result = await this.userModel.exists({ email });
    return result;
  }

  async create(user: UserRequestDto): Promise<User> {
    return await this.userModel.create(user);
  }

  async createPasswordCode(user: User): Promise<string> {
    const code = randomCodeGenerator(18);
    const then = new Date();
    then.setMinutes(then.getMinutes() + 5);
    await this.passwordModel.create({ code, user: user.id, expiredAt: then.toISOString() });
    return code;
  }

  async changePassword(id: string, password: string): Promise<User | null> {
    const user = await this.userModel.findByIdAndUpdate(id, { password });
    if (!user) return null;
    return user;
  }
}
