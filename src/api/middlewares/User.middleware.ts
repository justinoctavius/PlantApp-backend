import { SERVICE_TYPES } from '../../types';
import { JWTUtil } from '../../utils';

import IUserService from '../../services/interfaces/IUser.service';
import container from '../inversify.config';

const userService: IUserService = container.get(SERVICE_TYPES.UserServiceType);

class UserMiddleware {
  static async verifyAdmin(req, res, next) {
    const token = req.headers['authorization'].split(' ')[1];
    const tokenDecode: any = JWTUtil.decode(token);
    const response: any = await userService.getUserAsync(tokenDecode.data);
    if (response.payload.admin) {
      next();
    } else {
      res
        .json({ msg: `you aren't an admin`, payload: null, status: 500 })
        .status(500);
    }
  }
  static async getUserByToken(req, res, next) {
    const token = req.headers['authorization'].split(' ')[1];
    const tokenDecode: any = JWTUtil.decode(token);
    if (tokenDecode.data) {
      const response: any = await userService.getUserAsync(tokenDecode.data);
      if (response) {
        req.body.response = response;
        next();
      } else {
        res
          .json({ msg: `user not found`, payload: null, status: 500 })
          .status(500);
      }
    } else {
      res
        .json({ msg: `token invalid`, payload: null, status: 500 })
        .status(500);
    }
  }
}

export default UserMiddleware;
