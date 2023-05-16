import express, { Router } from 'express';
import item  from '../controller/items';

const router: Router = express.Router();

router.get('/color/:color', item.getByColor)
router.get("/gender/:gender", item.getByGender)
router.get("/size/:size", item.getBySize)
router.get("/search", item.search)

router.post("/add", item.add)

export default router;
