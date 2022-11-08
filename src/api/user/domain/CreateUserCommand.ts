type Params = {
    name: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
};

export default class CreateUserCommand {
  name: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;

  constructor(params: Params) {
    this.name = params.name;
    this.lastName = params.lastName;
    this.userName = params.userName;
    this.email = params.email;
    this.password = params.password;
  }
}
