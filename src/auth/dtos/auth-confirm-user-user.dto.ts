import { IsEmail, IsString } from 'class-validator';

export class AuthConfirmUserDto {
  @IsEmail()
  email: string;

  @IsString()
  confirmationCode: string;
}
