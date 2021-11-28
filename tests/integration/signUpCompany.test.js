import '../../src/setup.js';
import supertest from 'supertest';
import app from '../../src/app.js';
import * as clearDatabase from '../utils/clearDatabase.js';
import * as createBody from '../utils/createBody.js';

beforeAll(async () => await clearDatabase.clearCompanys());

const request = supertest(app);

describe('POST /sign-company-up', () => {
  it('should return 400 when not sending body', async () => {
    const result = await request.post('/sign-company-up');

    expect(result.status).toEqual(400);
  });

  it('should return 400 when sending empty body', async () => {
    const result = await request.post('/sign-company-up').send({});

    expect(result.status).toEqual(400);
  });

  it('should return 400 when sending invalid body', async () => {
    const body = createBody.invalidCompanyBody();
    const result = await request.post('/sign-company-up').send(body);

    expect(result.status).toEqual(400);
  });

  it('should return 201 when sending valid body', async () => {
    const body = createBody.companyBody();
    const result = await request.post('/sign-company-up').send(body);

    expect(result.status).toEqual(201);
  });
});
