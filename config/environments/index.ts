import development from './development';
import production from './production';

let current_env;

if (process.env.NODE_ENV !== 'dev') {
  current_env = production;
} else {
  current_env = development;
}

export default current_env;
