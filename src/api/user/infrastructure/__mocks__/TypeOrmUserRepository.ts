// manual mocking
import UserModel from '../../domain/UserModel';

export const findUserByMail = jest
  .fn()
  .mockResolvedValue(new UserModel('a', 'a', 'a', 'user@user.com', 'a'));

export const save = jest.fn().mockResolvedValue(true);

const mock = jest.fn().mockImplementation(() => {
  return { findUserByMail: findUserByMail, save: save };
});

export default mock;
