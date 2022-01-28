import { ConflictException, Injectable } from '@nestjs/common';
import { UserRequestDto } from './dto/user.request.dto';
import * as bcrypt from 'bcrypt';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async register(body: UserRequestDto) {
    const { email, name, password } = body;
    const isCatExists = await this.usersRepository.existsByEmail(email);

    if (isCatExists) {
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
}
