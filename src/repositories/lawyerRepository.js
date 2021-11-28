import connection from '../database/database.js';

const lawyerEmailAlreadyRegistered = async ({ email }) => {
  const lawyers = await connection.query(
    'SELECT * FROM lawyers WHERE email = $1',
    [email]
  );

  return Boolean(lawyers.rowCount);
};

const lawyerCpfAlreadyRegistered = async ({ cpf }) => {
  const lawyers = await connection.query(
    'SELECT * FROM lawyers WHERE cpf = $1',
    [cpf]
  );

  return Boolean(lawyers.rowCount);
};

const lawyerPhoneAlreadyRegistered = async ({ phone }) => {
  const lawyers = await connection.query(
    'SELECT * FROM lawyers WHERE phone = $1',
    [phone]
  );

  return Boolean(lawyers.rowCount);
};

const createLawyer = async ({
  name,
  email,
  hashedPassword,
  cpf,
  phone,
  description,
}) => {
  await connection.query(
    'INSERT INTO lawyers (name, email, password, cpf, phone, description) VALUES ($1, $2, $3, $4, $5, $6)',
    [name, email, hashedPassword, cpf, phone, description]
  );

  return 1;
};

export {
  lawyerCpfAlreadyRegistered,
  lawyerEmailAlreadyRegistered,
  lawyerPhoneAlreadyRegistered,
  createLawyer,
};
