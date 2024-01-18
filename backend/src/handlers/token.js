import jwt from 'jsonwebtoken';

const tokenHandler = (req, res) => {
  // best to generate a random token per logged in user but we'll hard-code a user for simplicity
  const user = { username: 'local-web-user' };
  const secretKey = process.env.TOKEN_SECRET;
  const options = {
    algorithm: 'HS256',
    expiresIn: process.env.BACKEND_TOKEN_EXPIRATION,
  };
  const token = jwt.sign(user, secretKey, options);
  res.json({ token });
};

export { tokenHandler };
