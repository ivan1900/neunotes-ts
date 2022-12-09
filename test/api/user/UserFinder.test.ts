import 'reflect-metadata';
import { container } from 'tsyringe';
import TypeOrmUserRepository from '../../../src/api/user/infrastructure/TypeOrmUserRepository';
import UserFinder from '../../../src/api/user/application/UserFinder';
import { mocked } from 'ts-jest/utils';
import { UserRepository } from '../../../src/api/user/domain/UserRepository';
import UserModel from '../../../src/api/user/domain/UserModel';

const mockGetUserByMail = jest
  .fn()
  .mockResolvedValue(new UserModel('a', 'a', 'a', 'user@user.com', 'a'));
const mockSave = jest.fn().mockResolvedValue(true);
jest.mock('../../../src/api/user/infrastructure/TypeOrmUserRepository', () => {
  return jest.fn().mockImplementation(() => {
    return { findUserByMail: mockGetUserByMail, save: mockSave };
  });
});

describe('get user model', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  test('existing user', async () => {
    const userFinder = new UserFinder(new TypeOrmUserRepository());

    const user = (await userFinder.byMail('user@user.com')) as UserModel;

    expect(user).toBeInstanceOf(UserModel);
    expect(user.email).toBe('user@user.com');
  });
});

// mockear la base de datos para hacer test unitario
