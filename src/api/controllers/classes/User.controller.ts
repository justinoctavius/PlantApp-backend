import { injectable, inject } from 'inversify';
import { SERVICE_TYPES } from '../../../types';

import IUserService from '../../../services/interfaces/IUser.service';
import IUserController from '../intefaces/IUser.controller';

@injectable()
class UserController implements IUserController {
  @inject(SERVICE_TYPES.UserServiceType) private _userService: IUserService;
  //=============================== Sign Up =========================================
  async signUpAsync(req, res) {
    const { username, password, email } = req.body;
    const response: any = await this._userService.signUpAsync({
      username,
      email,
      password,
    });
    res.json(response).status(response.status);
  }
  //=============================== Sign In =========================================
  async signInAsync(req, res) {
    const { username, email, password } = req.body;
    const response: any = await this._userService.signInAsync({
      username,
      email,
      password,
    });
    res.json(response).status(response.status);
  }
}

export default UserController;
