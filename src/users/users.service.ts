import { Injectable } from '@nestjs/common';

type User = {
  userId: number;
  username: string;
  password: string;
  pet: {
    name: string;
    picId: number;
  };
};

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'izhal',
        password: '11',
        pet: { name: 'IzHaL', picId: 1 },
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret',
        pet: { name: 'gopher', picId: 2 },
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess',
        pet: { name: 'jenny', picId: 3 },
      },
    ];
  }

  async findOne(username: string): Promise<User> {
    return this.users.find((user) => user.username === username);
  }
}
