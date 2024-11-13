import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
  ClientOptions,
} from '@nestjs/microservices';
import { User } from './user-entity';

@Injectable()
export class UserServiceService {
  private client: ClientProxy;

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
    // Ensure the object is of type ClientOptions
    this.client = ClientProxyFactory.create({
      transport: Transport.REDIS,
      options: {
        url: 'redis://localhost:6379',
      },
    } as ClientOptions);
  }

  async createUser(userDto: Partial<User>): Promise<User> {
    const user = await this.userRepository.save(userDto);
    this.client.emit('user_created', user);
    return user;
  }

  findUserById(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  updateUser(id: number, userDto: Partial<User>): Promise<any> {
    return this.userRepository.update(id, userDto);
  }

  deleteUser(id: number): Promise<any> {
    return this.userRepository.delete(id);
  }
}
