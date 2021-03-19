import { Router } from 'express';
import container from '../inversify.config';
import { CONTROLLER_TYPES } from '../../types';
import { JWTMiddleware } from '../middlewares';

const route = Router();

const productController: any = container.get(
  CONTROLLER_TYPES.ProductControllerType
);

route.get('/product/:category_id', JWTMiddleware.verifyToken, (req, res) =>
  productController.getAllProductAsync(req, res)
);
route.get('/one-product/:product_id', JWTMiddleware.verifyToken, (req, res) =>
  productController.getProductAsync(req, res)
);
route.post('/product/', JWTMiddleware.verifyToken, (req, res) =>
  productController.insertProductAsync(req, res)
);
route.put('/product/:product_id', JWTMiddleware.verifyToken, (req, res) =>
  productController.updateProductAsync(req, res)
);
route.delete('/product/:product_id', JWTMiddleware.verifyToken, (req, res) =>
  productController.removeProductAsync(req, res)
);
export default route;
