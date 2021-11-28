import * as signInService from '../services/signInService.js';

const signIn = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.sendStatus(400);

  const success = await signInService.signIn({ email, password });

  if (success === -2) return res.sendStatus(404);
  if (success === -1) return res.sendStatus(401);

  return res.sendStatus(200);
};

export { signIn };
