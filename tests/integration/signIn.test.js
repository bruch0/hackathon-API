import '../../src/setup.js';
import supertest from 'supertest';
import app from '../../src/app.js';
import * as clearDatabase from '../utils/clearDatabase.js';
import * as createBody from '../utils/createBody.js';
import * as userFactory from '../factories/userFactory.js';

beforeAll(async () => {
  await clearDatabase.clearLawyers();
  await clearDatabase.clearCompanys();
});

const request = supertest(app);

describe('POST /sign-in', () => {
  it('should return 400 when not sending body', async () => {
    const result = await request.post('/sign-in');

    expect(result.status).toEqual(400);
  });

  it('should return 400 when sending empty body', async () => {
    const result = await request.post('/sign-in');

    expect(result.status).toEqual(400);
  });

  it('should return 404 when email is not found', async () => {
    const body = createBody.loginBody();
    const result = await request.post('/sign-in').send(body);

    expect(result.status).toEqual(404);
  });

  it('should return 401 when the lawyer password is wrong', async () => {
    const { email } = await userFactory.createLawyer();
    const result = await request
      .post('/sign-in')
      .send({ email, password: 'wrong password' });

    expect(result.status).toEqual(401);
  });

  it('should return 401 when the company password is wrong', async () => {
    const { email } = await userFactory.createCompany();
    const result = await request
      .post('/sign-in')
      .send({ email, password: 'wrong password' });

    expect(result.status).toEqual(401);
  });

  it('should return 200 when the lawyer logins successfully', async () => {
    const body = await userFactory.createLawyer();
    const result = await request.post('/sign-in').send(body);

    expect(result.status).toEqual(200);
  });

  it('should return 200 when the company logins successfully', async () => {
    const body = await userFactory.createCompany();
    const result = await request.post('/sign-in').send(body);

    expect(result.status).toEqual(200);
  });
});
