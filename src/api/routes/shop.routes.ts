import { Router } from 'express';
import { CONTROLLER_TYPES } from '../../types';
import container from '../inversify.config';
import JWTMiddleware from '../middlewares/JWT.middleware';

const route = Router();

const shopController: any = container.get(CONTROLLER_TYPES.ShopControllerType);

route.get('/shop/:offset', JWTMiddleware.verifyToken, (req, res) =>
  shopController.getAllShopAsync(req, res)
);
route.get('/shop-global', JWTMiddleware.verifyToken, (req, res) =>
  shopController.getGlobalShopAsync(req, res)
);
route.get('/one-shop/:shop_id', JWTMiddleware.verifyToken, (req, res) =>
  shopController.getShopAsync(req, res)
);
route.put('/shop/:shop_id', JWTMiddleware.verifyToken, (req, res) =>
  shopController.updateShopAsync(req, res)
);

export default route;
