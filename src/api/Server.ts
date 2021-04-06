import { injectable } from 'inversify';
import * as express from 'express';
import config from '../../config';

@injectable()
class Server {
  private env: any;
  static app: express.Express;
  constructor() {
    this.env = config.env;
    Server.app = express();
    config.serverConfig(Server.app);
  }

  async start() {
    Server.app.listen(this.env.PORT, () => {
      console.log('server running on port: ' + this.env.PORT);
    });
  }
}

export default Server;
