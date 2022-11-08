/* eslint-disable no-unused-vars */
import CreateUserCommand from './CreateUserCommand';

export interface UserRepository {
  save(createUserCommand: CreateUserCommand): Promise<void>;
}
