/* eslint-disable no-unused-vars */
import CreateUserCommand from './CreateUserCommand';
import UserModel from './UserModel';
import { Nullable } from '../../shared/domain/Nullable';

export interface UserRepository {
  findUserByMail(email: string): Promise<UserModel | null>;
  FindUserByUserName(userName: string): Promise<UserModel | null>;
  save(createUserCommand: CreateUserCommand): Promise<boolean>;
}
