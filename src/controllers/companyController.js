import * as companyService from '../services/companyService.js';

const createCompany = async (req, res) => {
  const { name, email, password, cnpj } = req.body;

  if (!name || !email || !password || !cnpj) return res.sendStatus(400);

  const success = await companyService.createCompany({
    name,
    email,
    password,
    cnpj,
  });

  if (success === -2) return res.sendStatus(400);
  if (success === -1) return res.sendStatus(409);

  return res.sendStatus(201);
};

export { createCompany };
