import express, { Router, Request, Response } from 'express';
import User from '../controller/user';

const router: Router = express.Router();

router.get('/getAll', User.getAll);

export default router;
