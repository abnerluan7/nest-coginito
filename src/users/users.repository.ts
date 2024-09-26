import { JsonDB, Config } from 'node-json-db';
import { UserDto } from './dtos/user.dto';

export const dbUsers = new JsonDB(new Config('users', true, false, '/'));

export const createUser = async (user: UserDto) => {
  dbUsers
    .push(`/${user.id}`, { ...user })
    .then(() => {
      return { status: 'success' };
    })
    .catch((err) => console.log(err));
};

export const getAllUsers = async () => {
  return dbUsers
    .getData(`/`)
    .then((users) => {
      return users;
    })
    .catch((err) => console.log(err));
};
