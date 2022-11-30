import bcrypt from 'bcryptjs';

export const encryptPassword = (password: string) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

export const comparePassword = (password: string, encryptedPassword: string) =>
  bcrypt.compareSync(password, encryptedPassword);
