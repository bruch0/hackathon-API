import faker from 'faker-br';

const lawyerBody = () => {
  const body = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    phone: faker.phone.phoneNumber('###########'),
    cpf: faker.br.cpf(),
    description: faker.name.findName(),
  };

  return body;
};

const invalidLawyerBody = () => {
  const body = {
    name: faker.br.cpf(),
    email: faker.internet.password(),
    password: faker.internet.email(),
    phone: faker.name.findName(),
    cpf: faker.commerce.color(),
    description: faker.address.zipCode(),
  };

  return body;
};

const companyBody = () => {
  const body = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    cnpj: faker.br.cnpj(),
  };

  return body;
};

const invalidCompanyBody = () => {
  const body = {
    name: faker.address.zipCode(),
    email: faker.internet.password(),
    password: faker.internet.email(),
    cnpj: faker.br.cpf(),
  };

  return body;
};

const loginBody = () => {
  const body = {
    email: faker.internet.email(),
    password: faker.internet.password(),
  };

  return body;
};

export {
  lawyerBody,
  invalidLawyerBody,
  companyBody,
  invalidCompanyBody,
  loginBody,
};
