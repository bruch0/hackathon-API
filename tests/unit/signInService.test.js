import '../../src/setup.js';
import * as clearDatabase from '../utils/clearDatabase.js';
import * as createBody from '../utils/createBody.js';
import * as userFactory from '../factories/userFactory.js';
import * as signInService from '../../src/services/signInService.js';

beforeAll(async () => {
  await clearDatabase.clearLawyers();
  await clearDatabase.clearCompanys();
});

describe('sign in service', () => {
  const body = createBody.loginBody();

  it('should return -2 when the email is not registered', async () => {
    const result = await signInService.signIn(body);

    expect(result).toEqual(-2);
  });

  it('should return object when lawyers login successfully', async () => {
    const { email, password } = await userFactory.createLawyer();
    const result = await signInService.signIn({ email, password });

    expect(typeof result).toBe('object');
  });

  it('should return -1 when lawyers insert wrong password', async () => {
    const { email } = await userFactory.createLawyer();
    const result = await signInService.signIn({
      email,
      password: 'wrong password',
    });

    expect(result).toEqual(-1);
  });

  it('should return object when companys login successfully', async () => {
    const { email, password } = await userFactory.createCompany();
    const result = await signInService.signIn({ email, password });

    expect(typeof result).toBe('object');
  });

  it('should return -1 when companys insert wrong password', async () => {
    const { email } = await userFactory.createCompany();
    const result = await signInService.signIn({
      email,
      password: 'wrong password',
    });

    expect(result).toEqual(-1);
  });
});
