import connection from '../../src/database/database.js';

const clearLawyers = async () => {
  await connection.query('TRUNCATE lawyers CASCADE');
};

const clearCompanys = async () => {
  await connection.query('TRUNCATE companys CASCADE');
};

export { clearLawyers, clearCompanys };
