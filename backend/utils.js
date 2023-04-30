import jwt from 'jsonwebtoken';

const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({ message: 'Invalid Token' });
      } else {
        console.log(decoded); // decoded consists of userID, iat, exp
        req.user = decoded;
        next();
      }
    });
  } else {
    res.status(401).json({ message: 'No Token' });
  }
};

export { isAuth };
