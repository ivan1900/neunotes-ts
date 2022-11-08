import express from 'express';
import { signin, signup } from '../../controllers/auth.controller';
// import TokenValidation from '../../middleware/verify.token';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);

export default router;
