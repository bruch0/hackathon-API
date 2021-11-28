import * as companySchemas from '../schemas/companySchemas.js';
import * as companyRepository from '../repositories/companyRepository.js';
import { hashSync } from 'bcrypt';

const createCompany = async ({ name, email, password, cnpj }) => {
  const validation = companySchemas.signUp.validate({
    name,
    email,
    password,
    cnpj,
  });

  if (validation.error) return -2;

  const emailTaken = await companyRepository.companyEmailAlreadyRegistered({
    email,
  });

  if (emailTaken) return -1;

  const cnpjTaken = await companyRepository.companyCnpjAlreadyRegistered({
    cnpj,
  });
  if (cnpjTaken) return -1;

  const hashedPassword = hashSync(password, 12);

  const success = companyRepository.createCompany({
    name,
    email,
    hashedPassword,
    cnpj,
  });

  return success;
};

export { createCompany };
