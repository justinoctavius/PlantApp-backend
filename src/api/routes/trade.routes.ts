import { Router } from 'express';
import { CONTROLLER_TYPES } from '../../types';
import ITradeController from '../controllers/intefaces/ITrade.controller';
import container from '../inversify.config';
import JWTMiddleware from '../middlewares/JWT.middleware';

const route = Router();

const tradeController: ITradeController = container.get(
  CONTROLLER_TYPES.TradeControllerType
);

route.post('/buy/', JWTMiddleware.verifyToken, (req, res) =>
  tradeController.buyProductAsync(req, res)
);

export default route;
