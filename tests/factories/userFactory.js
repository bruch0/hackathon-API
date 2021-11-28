import connection from '../../src/database/database.js';
import faker from 'faker-br';
import { hash, hashSync } from 'bcrypt';

const createLawyer = async () => {
  const password = faker.internet.password();
  const hashedPassword = hashSync(password, 12);

  const userInfo = await connection.query(
    'INSERT INTO lawyers (name, email, password, cpf, phone, description) VALUES ($1, $2, $3, $4, $5, $6) RETURNING email, password',
    [
      faker.name.findName(),
      faker.internet.email(),
      hashedPassword,
      faker.phone.phoneNumber('###########'),
      faker.br.cpf(),
      faker.name.findName(),
    ]
  );

  return { email: userInfo.rows[0].email, password };
};

const createCompany = async () => {
  const password = faker.internet.password();
  const hashedPassword = hashSync(password, 12);

  const userInfo = await connection.query(
    'INSERT INTO companys (name, email, password, cnpj) VALUES ($1, $2, $3, $4) RETURNING email',
    [
      faker.name.findName(),
      faker.internet.email(),
      hashedPassword,
      faker.br.cnpj(),
    ]
  );

  return { email: userInfo.rows[0].email, password };
};

export { createLawyer, createCompany };
