import { injectable } from 'inversify';
import * as express from 'express';
import config from '../../config';

@injectable()
class Server {
  private env: any;
  private app: express.Express;
  constructor() {
    this.env = config.env;
    this.app = express();
    config.serverConfig(this.app);
  }

  async start() {
    await this.app.listen(this.env.PORT, () => {
      console.log('server running on port: ' + this.env.PORT);
    });
  }
}

export default Server;
