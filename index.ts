import { connect } from './config/database';
import container from './src/api/inversify.config';
import StartUp from './src/api/StartUp';
import { APP_TYPES } from './src/types';

const application: StartUp = container.get(APP_TYPES.App);

connect();
application.start().then(() => {
  application.createAdminAsync();
});
