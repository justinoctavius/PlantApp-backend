import { Router } from 'express';
import { CONTROLLER_TYPES } from '../../types';
import container from '../inversify.config';
import IUserController from '../controllers/intefaces/IUser.controller';

const route = Router();

const userController: IUserController = container.get(
  CONTROLLER_TYPES.UserControllerType
);

route.post('/signup', (req, res) => userController.signUpAsync(req, res));
route.post('/signin', (req, res) => userController.signInAsync(req, res));

export default route;
