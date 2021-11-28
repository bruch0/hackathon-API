import * as lawyerSchemas from '../schemas/lawyerSchemas.js';
import * as lawyerRepository from '../repositories/lawyerRepository.js';

const createLawyer = async ({
  name,
  email,
  password,
  cpf,
  phone,
  description,
}) => {
  const validation = lawyerSchemas.signUp.validate({
    name,
    email,
    password,
    cpf,
    phone,
    description,
  });

  if (validation.error) return -2;

  const emailTaken = await lawyerRepository.lawyerEmailAlreadyRegistered({
    email,
  });
  if (emailTaken) return -1;

  const cpfTaken = await lawyerRepository.lawyerCpfAlreadyRegistered({ cpf });
  if (cpfTaken) return -1;

  const phoneTaken = await lawyerRepository.lawyerPhoneAlreadyRegistered({
    phone,
  });
  if (phoneTaken) return -1;

  const success = lawyerRepository.createLawyer({
    name,
    email,
    password,
    cpf,
    phone,
    description,
  });

  return success;
};

export { createLawyer };
