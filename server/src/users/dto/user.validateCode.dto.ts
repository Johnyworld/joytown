import { IsNotEmpty } from 'class-validator';

export class UserValidateCodeDto {
  @IsNotEmpty()
  code: string;
}
