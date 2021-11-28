import { compareSync } from 'bcrypt';
import jwt from 'jsonwebtoken';

import * as signInRepository from '../repositories/signInRepository.js';

const signIn = async ({ email, password }) => {
  const jwtSecret = process.env.JWT_SECRET;
  const oneDayInSeconds = 60 * 60 * 24;
  const configurations = { expiresIn: oneDayInSeconds };

  const employee = await signInRepository.signInEmployee({ email });
  if (employee) {
    const validPassword = compareSync(password, employee.password);

    if (!validPassword) return -1;

    const company = await signInRepository.findCompanyById({
      companyId: employee.company_id,
    });

    const token = jwt.sign(
      { userId: employee.id, type: 'employee' },
      jwtSecret,
      configurations
    );

    return {
      company,
      name: employee.name,
      token,
    };
  }

  const company = await signInRepository.signInCompany({ email });

  if (company) {
    const validPassword = compareSync(password, company.password);

    if (!validPassword) return -1;

    const token = jwt.sign(
      { userId: company.id, type: 'company' },
      jwtSecret,
      configurations
    );

    return {
      company,
      name: employee.name,
      token,
    };
  }

  const lawyer = await signInRepository.signInLawyer({ email });

  if (!lawyer) return -2;

  const validPassword = compareSync(password, lawyer.password);

  if (!validPassword) return -1;

  const token = jwt.sign(
    { userId: lawyer.id, type: 'lawyer' },
    jwtSecret,
    configurations
  );

  return {
    name: lawyer.name,
    token,
  };
};

export { signIn };
