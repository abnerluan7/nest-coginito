import { IsEmail } from 'class-validator';

export class UserDto {
  @IsEmail()
  email: string;
  id: string;
  name: string;
}
