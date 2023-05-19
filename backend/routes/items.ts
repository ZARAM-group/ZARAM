import express, { Router } from 'express';
import item  from '../controller/items';
import authenticate from '../middleware/authenticate';

const router: Router = express.Router();

router.get('/color/:color', item.getByColor)
router.get("/gender/:gender", item.getByGender)
router.get("/size/:size", item.getBySize)

router.get("/searchWoman", item.searchWoman)
router.get("/searchMan", item.searchMan)
router.get("/searchKids", item.searchKids)

router.get("/cartItems/:id", item.getCartItems)

router.post("/searchCategory", item.offcanvasSearch)
router.post("/add", authenticate, item.add)

export default router;
