import { Router } from 'express';
import { CONTROLLER_TYPES } from '../../types';
import container from '../inversify.config';
import { JWTMiddleware, UserMiddleware } from '../middlewares';

const route = Router();

const categoryController: any = container.get(
  CONTROLLER_TYPES.CategoryControllerType
);

route.get('/category/:shop_id', JWTMiddleware.verifyToken, (req, res) =>
  categoryController.getAllCategoryAsync(req, res)
);
route.get('/one-category/:category_id', JWTMiddleware.verifyToken, (req, res) =>
  categoryController.getCategoryAsync(req, res)
);
route.post(
  '/category/',
  UserMiddleware.verifyAdmin,
  JWTMiddleware.verifyToken,
  (req, res) => categoryController.insertCategoryAsync(req, res)
);
route.put(
  '/category/:category_id',
  UserMiddleware.verifyAdmin,
  JWTMiddleware.verifyToken,
  (req, res) => categoryController.updateCategoryAsync(req, res)
);
route.delete(
  '/category/:category_id/',
  UserMiddleware.verifyAdmin,
  JWTMiddleware.verifyToken,
  (req, res) => categoryController.removeCategoryAsync(req, res)
);

export default route;
