import {Router} from 'express';
import * as productsController from '../controllers/products.controller';

const router = Router();

router.post('/', productsController.getProducts);
router.get('/', productsController.createProduct);
router.get('/:productId', productsController.getProductById);
router.put('/:productId', productsController.updateProductById);
router.delete('/:productId', productsController.deleteProductById);

export default router;