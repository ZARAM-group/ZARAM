import express, { Router } from 'express';
import User from '../controller/user';
import authenticate from '../middleware/authenticate';

const router: Router = express.Router();

router.get('/getAll', User.getAll);
router.get("/refresh/:id", User.refreshUser)

router.post("/login",User.login)
router.post("/signup", User.signup)
router.post('/add', User.addToCart);


export default router;
