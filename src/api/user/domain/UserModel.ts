import { encryptPassword, comparePassword } from '../../shared/domain/EncryptHelper';

interface UserModelParams {
  name: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
}

export default class UserModel {
  readonly name: string;
  readonly lastName: string;
  readonly userName: string;
  readonly email: string;
  readonly password: string;

  constructor({ name, lastName, userName, email, password }: UserModelParams) {
    this.name = name;
    this.lastName = lastName;
    this.userName = userName;
    this.email = email;
    this.password = encryptPassword(password);
  }

  static create({ name, lastName, userName, email, password }: UserModelParams): UserModel {
    return new UserModel({ name, lastName, userName, email, password });
  }

  public isValidPassword(password: string) {
    return comparePassword(password, this.password);
  }
}
