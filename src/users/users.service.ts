import { Injectable } from '@nestjs/common';
import { User, UserResponse } from './users.interface';
import { createUser, getAllUsers } from './users.repository';
import { UserDto } from './dtos/user.dto';

@Injectable()
export class UsersService {
  async listAllUsers(): Promise<User[]> {
    const users = await getAllUsers();
    const usersFormatted: User[] = Object.keys(users).map(
      (key: string) => users[key],
    );
    return usersFormatted;
  }

  async createNewUser(user: UserDto): Promise<{ status: string } | any> {
    return await createUser(user);
  }
}
