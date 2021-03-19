import { Router } from 'express';
import { CONTROLLER_TYPES } from '../../types';
import container from '../inversify.config';
import { JWTMiddleware } from '../middlewares';

const route = Router();

const receiptController: any = container.get(
  CONTROLLER_TYPES.ReceiptControllerType
);

route.get('/receipt/:shop_id', JWTMiddleware.verifyToken, (req, res) =>
  receiptController.getAllReceiptAsync(req, res)
);
route.get('/one-receipt/:receipt_id', JWTMiddleware.verifyToken, (req, res) =>
  receiptController.getReceiptAsync(req, res)
);

export default route;
