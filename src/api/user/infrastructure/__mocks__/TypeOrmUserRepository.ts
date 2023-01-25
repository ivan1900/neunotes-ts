// manual mocking
import UserModel from '../../domain/UserModel';

export const findUserByMail = jest
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
  .mockResolvedValue(null);

export const save = jest.fn().mockResolvedValue(true);

const mock = jest.fn().mockImplementation(() => {
  return { findUserByMail: findUserByMail, save: save };
});

export default mock;
