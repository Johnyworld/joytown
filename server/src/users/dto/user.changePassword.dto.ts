import { IsNotEmpty } from 'class-validator';

export class UserChangePasswordDto {
  @IsNotEmpty()
  code: string;

  @IsNotEmpty()
  password: string;
}
