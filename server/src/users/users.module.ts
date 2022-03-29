import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { Password, PasswordSchema, User, UserSchema } from './users.schema';
import { UsersService } from './users.service';
import { MailerModule } from '@nestjs-modules/mailer';

const mailerConfig = {
  transport: {
    host: 'smtp.gmail.com',
    secure: false,
    auth: {
      user: process.env.EMAIL_HOST_USER, // generated ethereal user
      pass: process.env.EMAIL_HOST_PASSWORD, // generated ethereal password
    },
  },
};

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Password.name, schema: PasswordSchema },
    ]),
    MailerModule.forRoot(mailerConfig),
    forwardRef(() => AuthModule),
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService, UsersRepository],
})
export class UsersModule {}
