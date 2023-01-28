export interface LoginUserData {
  userName: string;
  password: string;
}

class LoginUserCommand {
  public readonly userName;
  public readonly password;

  constructor({ userName, password }: LoginUserData) {
    this.userName = userName;
    this.password = password;
  }
}

export default LoginUserCommand;
