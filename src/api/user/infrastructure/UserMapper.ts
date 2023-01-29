import UserModel from '../domain/UserModel';
import User from '../../../entity/User';

// el mapper convertira a dto a persistencia y a dominio

class UserMapper {
  public static getUserModel(user: User) {
    const userModel = UserModel.create({
      name: user.name,
      lastName: user.lastName,
      userName: user.userName,
      email: user.email,
      password: user.password,
    });

    return userModel;
  }
}

export default UserMapper;
