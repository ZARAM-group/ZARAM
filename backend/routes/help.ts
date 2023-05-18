import express, { Router } from 'express';
import searchHelp from '../controller/help';

const router: Router = express.Router();

router.get("/search", searchHelp.searchHelp);

export default router;
