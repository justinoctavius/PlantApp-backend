import { Router } from 'express';
import { CONTROLLER_TYPES } from '../../types';
import IImageController from '../controllers/intefaces/IImage.controller';
import container from '../inversify.config';
import { ImageMiddleware, UserMiddleware, JWTMiddleware } from '../middlewares';

const route = Router();

const ImageController: IImageController = container.get(
  CONTROLLER_TYPES.ImageControllerType
);

route.get('/images/', JWTMiddleware.verifyToken, (req, res) =>
  ImageController.getAllImagesAsync(req, res)
);
route.get('/image/:image_id', JWTMiddleware.verifyToken, (req, res) =>
  ImageController.getImageByIdAsync(req, res)
);
route.post(
  '/image/',
  JWTMiddleware.verifyToken,
  (req, res, next) => UserMiddleware.verifyAdmin(req, res, next),
  ImageMiddleware.multer(),
  (req, res) => ImageController.insertImageAsync(req, res)
);
route.put(
  '/image/:image_id',
  JWTMiddleware.verifyToken,
  (req, res, next) => UserMiddleware.verifyAdmin(req, res, next),
  ImageMiddleware.multer(),
  (req, res) => ImageController.updateImageAsync(req, res)
);
route.delete(
  '/image/:image_id/',
  JWTMiddleware.verifyToken,
  (req, res, next) => UserMiddleware.verifyAdmin(req, res, next),
  (req, res) => ImageController.removeImageAsync(req, res)
);

export default route;
