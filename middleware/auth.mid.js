import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const token = req.headers.access_token;
  if (!token) return res.status(401).send();

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
  } catch (error) {
    res.status(401).send();
  }

  return next();
};