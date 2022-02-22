import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserSendEmailDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
