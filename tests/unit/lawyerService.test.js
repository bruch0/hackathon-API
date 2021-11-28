import '../../src/setup.js';
import * as clearDatabase from '../utils/clearDatabase.js';
import * as lawyerService from '../../src/services/lawyerService.js';
import * as createBody from '../utils/createBody.js';

beforeAll(async () => await clearDatabase.clearLawyers());

describe('lawyer service', () => {
  const body = createBody.lawyerBody();
  const invalidBody = createBody.invalidLawyerBody();

  it('should return -2 when sending invalid body', async () => {
    const result = await lawyerService.createLawyer(invalidBody);

    expect(result).toEqual(-2);
  });

  it('should return 1 when sending valid body', async () => {
    const result = await lawyerService.createLawyer(body);

    expect(result).toEqual(1);
  });

  it('should return -1 when sending the same body', async () => {
    const result = await lawyerService.createLawyer(body);

    expect(result).toEqual(-1);
  });
});
