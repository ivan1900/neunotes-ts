import { injectable } from 'tsyringe';
import { UserRepository } from '../domain/UserRepository';
import AppDataSource from '../../../data-source';
import User from '../../../entity/User';
import UserModel from '../domain/UserModel';

@injectable()
class TypeOrmUserRepository implements UserRepository {
  private repository;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  public async save(user: UserModel): Promise<boolean> {
    try {
      const userEntity = new User();
      userEntity.name = user.name;
      userEntity.userName = user.userName;
      userEntity.lastName = user.lastName;
      userEntity.email = user.email;
      userEntity.password = user.password;
      await this.repository.save(userEntity);
      return true;
    } catch {
      return false;
    }
  }
}

export default TypeOrmUserRepository;
