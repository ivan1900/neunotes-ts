// Test mocking factory
import TypeOrmUserRepository from '../../../src/api/user/infrastructure/TypeOrmUserRepository';
import UserFinder from '../../../src/api/user/application/UserFinder';
import UserModel from '../../../src/api/user/domain/UserModel';

const mockGetUserByMail = jest
  .fn()
  .mockResolvedValueOnce(
    new UserModel({
      name: 'Tomas',
      lastName: 'López',
      userName: 'tlopez',
      email: 'tomas.lopez@test.com',
      password: 'pass',
    }),
  )
  .mockResolvedValueOnce(null);

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
    const email = 'tomas.lopez@test.com';
    const user = (await userFinder.byMail(email)) as UserModel;

    expect(user).toBeInstanceOf(UserModel);
    expect(user.email).toBe(email);
  });
  test('user not exists', async () => {
    const userFinder = new UserFinder(new TypeOrmUserRepository());

    const user = (await userFinder.byMail('not@exists.com')) as UserModel;

    expect(user).toBeNull();
  });
});
