// Test mocking auto
import TypeOrmUserRepository from '../../../src/api/user/infrastructure/TypeOrmUserRepository';
import UserFinder from '../../../src/api/user/application/UserFinder';
import UserModel from '../../../src/api/user/domain/UserModel';

jest.mock('../../../src/api/user/infrastructure/TypeOrmUserRepository');

describe('user model', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  test('User repository is called one time by find user', async () => {
    const userFinder = new UserFinder(new TypeOrmUserRepository());
    const user = await userFinder.byMail('user@user.com');
    expect(user).toBeInstanceOf(UserModel);
    expect(TypeOrmUserRepository).toHaveBeenCalledTimes(1);
  });
});
