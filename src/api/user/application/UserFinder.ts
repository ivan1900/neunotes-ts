import { UserRepository } from '../domain/UserRepository';

class UserFinder {
  private userRepository;

  constructor(repository: UserRepository) {
    this.userRepository = repository;
  }

  // async run(email: string) {
  //   try {
  //     return this.userRepository.findUserByMail(email);
  //   } catch (error) {
  //     return error;
  //   }
  // }

  byMail(email: string) {
    try {
      return this.userRepository.findUserByMail(email);
    } catch (error) {
      return error;
    }
  }
}

export default UserFinder;
