export interface User {
  readonly name: string;
  readonly email: string;
  readonly id: string;
}

export interface UserResponse {
  users: User[];
}
