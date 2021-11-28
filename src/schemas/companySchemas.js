import joi from 'joi';

const signUp = joi.object({
  name: joi.string().required().min(3),
  email: joi.string().required().email().min(5),
  password: joi.string().required().min(8),
  cnpj: joi.string().required().min(14).max(14),
});

export { signUp };
