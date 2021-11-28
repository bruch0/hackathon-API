import * as lawyerService from '../services/lawyerService.js';

const createLawyer = async (req, res) => {
  const { name, email, password, cpf, phone, description } = req.body;

  if (!name || !email || !password || !phone || !cpf || !description)
    return res.sendStatus(400);

  const success = await lawyerService.createLawyer({
    name,
    email,
    password,
    cpf,
    phone,
    description,
  });

  if (success === -2) return res.sendStatus(400);
  if (success === -1) return res.sendStatus(409);

  return res.sendStatus(201);
};

export { createLawyer };
