import UserModel from '../domain/UserModel';
import User from '../../../entity/User';

// el mapper convertira a dto a persistencia y a dominio

class UserMapper {
  private userModel;

  constructor(user: User) {
    this.userModel = new UserModel(
      user.name,
      user.lastName,
      user.userName,
      user.email,
      user.password,
    );
  }

  public getUserModel() {
    return this.userModel;
  }
}

export default UserMapper;
