import {
  encryptPassword,
  comparePassword,
} from '../../../../src/api/shared/domain/EncryptHelper';

describe('Enconde an string whit value salt 10', () => {
  test('check valid password was created', () => {
    const password = '123456';
    const encryptedPassword = encryptPassword(password);
    expect(comparePassword(password, encryptedPassword)).toBeTruthy();
  });
});
