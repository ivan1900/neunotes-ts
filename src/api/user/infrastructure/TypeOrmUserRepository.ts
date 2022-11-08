import CreateUserCommand from '../domain/CreateUserCommand';
import { UserRepository } from '../domain/UserRepository';
import AppDataSource from '../../../data-source';
import User from '../../../entity/User';

class TypeOrmUserRepository implements UserRepository {
  private repository;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  public async save(createUserCommand: CreateUserCommand): Promise<void> {
    await this.repository.save(createUserCommand);
  }
}

export default TypeOrmUserRepository;
