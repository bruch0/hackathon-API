import joi from 'joi';

const signUp = joi.object({
  name: joi.string().required().min(3),
  email: joi.string().required().email().min(5),
  password: joi.string().required().min(8),
  cpf: joi.string().required().min(11).max(11),
  phone: joi.string().required().min(11).max(11),
  description: joi.string().required().min(8).max(255),
});

export { signUp };
