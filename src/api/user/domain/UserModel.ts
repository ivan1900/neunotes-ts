import encryptPassword from '../../shared/domain/encryptPassword';

export default class UserModel {
  readonly name: string;
  readonly lastName: string;
  readonly userName: string;
  readonly email: string;
  readonly password: string;

  constructor(
    name: string,
    lastName: string,
    userName: string,
    email: string,
    password: string,
  ) {
    this.name = name;
    this.lastName = lastName;
    this.userName = userName;
    this.email = email;
    this.password = encryptPassword(password);
  }

  static create(
    name: string,
    lastName: string,
    userName: string,
    email: string,
    password: string,
  ): UserModel {
    return new UserModel(name, lastName, userName, email, password);
  }
}
