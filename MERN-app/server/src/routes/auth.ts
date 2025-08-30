import { Router } from 'express';
import type { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js'; // Use .js extension for ESM
import authMiddleware from '../middleware/authMiddleware.js'; // Use .js extension for ESM

const router = Router();

// POST /api/auth/signup
router.post('/signup', async (req: Request, res: Response) => {
  const { username, password, shops } = req.body;

  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      msg: 'Password must be at least 8 characters long and contain at least one number and one special character.',
    });
  }

  try {
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    const existingShop = await User.findOne({ shops: { $in: shops } });
    if (existingShop) {
      return res.status(400).json({ msg: 'One or more shop names already exist' });
    }

    user = new User({
      username,
      password,
      shops,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error((err as Error).message);
    res.status(500).send('Server error');
  }
});

// POST /api/auth/signin
router.post('/signin', async (req: Request, res: Response) => {
  const { username, password, rememberMe } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Incorrect password' });
    }

    const payload = {
      id: user.id,
      username: user.username,
      shops: user.shops,
    };

    const expiresIn = rememberMe ? '7d' : '30m';
    const token = jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn });

    const cookieExpiration = rememberMe ? 7 * 24 * 60 * 60 * 1000 : 30 * 60 * 1000;

    res.cookie('token', token, {
      httpOnly: true,
      secure: false, // Set to true in production
      expires: new Date(Date.now() + cookieExpiration),
      domain: 'localhost' // Important for subdomain access
    });

    res.status(200).json({ msg: 'Login successful' });
  } catch (err) {
    console.error((err as Error).message);
    res.status(500).json({ msg: 'Server error during signin', error: (err as Error).message });
  }
});

// GET /api/auth/profile
router.get('/profile', authMiddleware, (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ msg: 'User not authenticated' });
  }
  const { username, shops } = req.user;
  res.json({ username, shops });
});

// POST /api/auth/logout
router.post('/logout', (req: Request, res: Response) => {
  res.cookie('token', '', {
    httpOnly: true,
    expires: new Date(0),
    domain: 'localhost' // Ensure cookie is cleared for all subdomains
  });
  res.status(200).json({ msg: 'Logged out' });
});

export default router;
