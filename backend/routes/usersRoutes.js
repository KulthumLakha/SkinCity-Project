import express from 'express';
import {
  signup,
  login,
  getProfile,
  verify,
} from '../controllers/usersControllers.js';
import { isAuth } from '../utils.js';

const router = express.Router();

router.post('/', signup);
router.post('/login', login);
router.get('/profile', isAuth, getProfile); // TO-DO: Implement authentication/protection function; may be replaced with /:id
router.get('/verify/:token', verify);

export default router;
