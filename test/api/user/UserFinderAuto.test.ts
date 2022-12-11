// Test mocking factory
import TypeOrmUserRepository from '../../../src/api/user/infrastructure/TypeOrmUserRepository';
import UserFinder from '../../../src/api/user/application/UserFinder';
import UserModel from '../../../src/api/user/domain/UserModel';

jest.mock('../../../src/api/user/infrastructure/TypeOrmUserRepository');

// const mockedTypeOrmUserRepository = TypeOrmUserRepository as jest.Mocked<
//   typeof TypeOrmUserRepository
// >;

describe('user model', () => {
  test('User repository is called one time by find user', () => {
    const userFinder = new UserFinder(new TypeOrmUserRepository());
    expect(TypeOrmUserRepository).toHaveBeenCalledTimes(1);
  });
});
