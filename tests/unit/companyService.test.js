import '../../src/setup.js';
import * as clearDatabase from '../utils/clearDatabase.js';
import * as companyService from '../../src/services/companyService.js';
import * as createBody from '../utils/createBody.js';

beforeAll(async () => await clearDatabase.clearCompanys());

describe('company service', () => {
  const body = createBody.companyBody();
  const invalidBody = createBody.invalidCompanyBody();

  it('should return -2 when sending invalid body', async () => {
    const result = await companyService.createCompany(invalidBody);

    expect(result).toEqual(-2);
  });

  it('should return 1 when sending valid body', async () => {
    const result = await companyService.createCompany(body);

    expect(result).toEqual(1);
  });

  it('should return -1 when sending the same body', async () => {
    const result = await companyService.createCompany(body);

    expect(result).toEqual(-1);
  });
});
