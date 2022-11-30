import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUser from '../api/user/application/CreateUser';
import CreateUserCommand from '../api/user/domain/CreateUserCommand';
import { userDto } from '../api/user/domain/userTypes.interfaces';
import TypeOrmUserRepository from '../api/user/infrastructure/TypeOrmUserRepository';

export const signup = async (req: Request, res: Response) => {
  const userRepository = container.resolve(TypeOrmUserRepository);

  const createUser = new CreateUser(userRepository);
  try {
    const request: userDto = {
      name: req.body.name,
      lastName: req.body.lastName,
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
    };

    const createUserCommand = new CreateUserCommand(request);
    const result = await createUser.run(createUserCommand);
    if (result) res.status(200);

    res.send('respuesta');
  } catch (error) {
    res.status(400);
    res.send(error);
  }
};

export const signin = async (req: Request, res: Response) => {
  res.status(200);
};
