import express, { Router, Request, Response } from 'express';
import User from '../controller/user';

const router: Router = express.Router();

router.get('/getAll', User.getAll);

router.post("/login", User.login)
router.post("/signup", User.signup)
router.post('/add',User.addToCart);

export default router;
