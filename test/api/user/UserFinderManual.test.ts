// Test mocking factory
import TypeOrmUserRepository from '../../../src/api/user/infrastructure/TypeOrmUserRepository';
import UserFinder from '../../../src/api/user/application/UserFinder';
import UserModel from '../../../src/api/user/domain/UserModel';
jest.mock('./../../../src/api/user/infrastructure/TypeOrmUserRepository');

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
