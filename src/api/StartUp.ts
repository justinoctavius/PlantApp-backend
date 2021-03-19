import { inject, injectable } from 'inversify';
import config from '../../config';
import IUserService from '../services/interfaces/IUser.service';
import { APP_TYPES, SERVICE_TYPES } from '../types';

@injectable()
class StartUp {
  @inject(APP_TYPES.Server) private _server;
  @inject(SERVICE_TYPES.UserServiceType) _userService: IUserService;

  async start() {
    await this._server.start();
    await this.createAdminAsync();
  }

  private async createAdminAsync() {
    const admin = {
      username: config.env.ADMIN.ADMIN_USERNAME,
      email: config.env.ADMIN.ADMIN_EMAIL,
      password: config.env.ADMIN.ADMIN_PASSWORD,
    };
    await this._userService.createAdminAsync(admin);
  }
}

export default StartUp;
