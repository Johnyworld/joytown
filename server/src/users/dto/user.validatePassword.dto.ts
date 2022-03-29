import { IsNotEmpty } from 'class-validator';

export class UserValidatePasswordDto {
  @IsNotEmpty()
  code: string;
}
