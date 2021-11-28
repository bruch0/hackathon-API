import connection from '../database/database.js';

const companyEmailAlreadyRegistered = async ({ email }) => {
  const companys = await connection.query(
    'SELECT * FROM companys WHERE email = $1',
    [email]
  );

  return Boolean(companys.rowCount);
};

const companyCnpjAlreadyRegistered = async ({ cnpj }) => {
  const companys = await connection.query(
    'SELECT * FROM companys WHERE cnpj = $1',
    [cnpj]
  );

  return Boolean(companys.rowCount);
};

const createCompany = async ({ name, email, hashedPassword, cnpj }) => {
  await connection.query(
    'INSERT INTO companys (name, email, password, cnpj) VALUES ($1, $2, $3, $4)',
    [name, email, hashedPassword, cnpj]
  );

  return 1;
};

export {
  companyCnpjAlreadyRegistered,
  companyEmailAlreadyRegistered,
  createCompany,
};
