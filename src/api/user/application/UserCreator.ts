import { request } from 'express';
import TypeOrmUserRepository from '../infrastructure/TypeOrmUserRepository';

class UserCreator {
  private userRepository;

  constructor(private request: request) {
    this.userRepository = new TypeOrmUserRepository();
  }

  async run() {
    
  }
}

export default UserCreator;
