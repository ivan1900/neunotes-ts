import CreateUserCommand from '../domain/CreateUserCommand';
import UserModel from '../domain/UserModel';
import { UserRepository } from '../domain/UserRepository';
import EventBus from '../../shared/infrastructure/EventBus';
import { DomainEvent } from '../../shared/domain/DomainEvent';

class CreateUser {
  private userRepository;

  constructor(repository: UserRepository) {
    this.userRepository = repository;
  }

  async run(params: CreateUserCommand) {
    const userModel = UserModel.create(
      params.name,
      params.lastName,
      params.userName,
      params.email,
      params.password,
    );
    try {
      await this.userRepository.save(userModel);
      const event = new DomainEvent(new Date(), { user: 1 });
      EventBus.getInstance().dispatch('UserWasCreated', event);
      return true;
    } catch (err) {
      return err;
    }
  }
}

export default CreateUser;
