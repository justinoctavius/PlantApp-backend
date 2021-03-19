import { connect } from './config/database';
import container from './src/api/inversify.config';
import { APP_TYPES } from './src/types';

const application: any = container.get(APP_TYPES.App);

connect();
application.start();
