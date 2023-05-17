import express, { Router } from 'express';
import User from '../controller/user';
import authenticate from '../middleware/authenticate';

const router: Router = express.Router();

router.get('/getAll', User.getAll);
router.post('/add',User.addToCart);
router.post("/login",User.login)
router.post("/signup", User.signup)
router.post('/add', authenticate, User.addToCart);


export default router;
