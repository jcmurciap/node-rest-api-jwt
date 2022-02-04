import {Router} from 'express';
import * as productsController from '../controllers/products.controller';
import { authJwt } from '../middlewares';

const router = Router();

router.post('/', [authJwt.verifyToken, authJwt.isModerator], productsController.createProduct);
router.get('/', productsController.getProducts);
router.get('/:productId', productsController.getProductById);
router.put('/:productId', [authJwt.verifyToken, authJwt.isAdmin], productsController.updateProductById);
router.delete('/:productId', [authJwt.verifyToken, authJwt.isAdmin], productsController.deleteProductById);

export default router;