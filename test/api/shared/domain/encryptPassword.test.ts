import bcrypt from 'bcryptjs';
import encryptPassword from '../../../../src/api/shared/domain/encryptPassword';

describe('Enconde an string whit value salt 10', () => {
  test('check valid password was created', () => {
    const password = '123456';
    const encryptedPassword = encryptPassword(password);
    expect(bcrypt.compareSync(password, encryptedPassword)).toBeTruthy();
  });
});
