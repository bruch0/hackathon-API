import connection from '../database/database.js';

const signInEmployee = async ({ email }) => {
  const employee = await connection.query(
    'SELECT * FROM company_employee WHERE email = $1',
    [email]
  );

  return employee.rowCount ? employee.rows[0] : 0;
};

const findCompanyById = async ({ companyId }) => {
  const company = await connection.query(
    'SELECT * FROM companys WHERE id = $1',
    [companyId]
  );

  return company.rowCount ? company.rows[0].name : 0;
};

const signInCompany = async ({ email }) => {
  const company = await connection.query(
    'SELECT * FROM companys WHERE email = $1',
    [email]
  );

  return company.rowCount ? company.rows[0] : 0;
};

const signInLawyer = async ({ email }) => {
  const lawyer = await connection.query(
    'SELECT * FROM lawyers WHERE email = $1',
    [email]
  );

  return lawyer.rowCount ? lawyer.rows[0] : 0;
};

export { signInCompany, findCompanyById, signInLawyer, signInEmployee };
