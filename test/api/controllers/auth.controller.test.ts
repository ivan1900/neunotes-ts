import request from 'supertest';
import app from '../../../src/app';

describe('POST /api/auth/auth/signup', () => {
  const signupPath = '/api/v1/auth/signup';
  const newUser = {
    name: 'name1',
    lastName: 'surname1',
    userName: 'user1',
    email: 'user1@user1.com',
    password: '123456',
  };

  test('Should create user', async () => {
    const response = await request(app).post(signupPath).send(newUser);
    expect(response.statusCode).toBe(200);
  });

  test('Should return bad request with empty request', async () => {
    const response = await request(app).post(signupPath).send({});
    expect(response.statusCode).toBe(400);
  });
});
