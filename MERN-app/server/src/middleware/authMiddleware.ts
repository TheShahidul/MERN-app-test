import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = decoded as Express.User; // Assigning to custom property
    next();
  } catch (_err: unknown) { // eslint-disable-line @typescript-eslint/no-unused-vars
    res.status(401).json({ msg: 'Invalid token' });
  }
};

export default authMiddleware;
