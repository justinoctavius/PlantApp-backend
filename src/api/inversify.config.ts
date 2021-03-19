import { Container } from 'inversify';
import {
  APP_TYPES,
  CONTROLLER_TYPES,
  REPOSITORY_TYPES,
  SERVICE_TYPES,
} from '../types';
import controllers from './controllers';
import services from './../services';
import repositories from '../dal/repository';
import Server from './Server';
import StartUp from './StartUp';

const container = new Container();

//controllers
container
  .bind(CONTROLLER_TYPES.CategoryControllerType)
  .to(controllers.CategoryController);

container
  .bind(CONTROLLER_TYPES.ProductControllerType)
  .to(controllers.ProductController);

container
  .bind(CONTROLLER_TYPES.ReceiptControllerType)
  .to(controllers.ReceiptController);

container
  .bind(CONTROLLER_TYPES.ShopControllerType)
  .to(controllers.ShopController);

container
  .bind(CONTROLLER_TYPES.UserControllerType)
  .to(controllers.UserController);

container
  .bind(CONTROLLER_TYPES.TradeControllerType)
  .to(controllers.TradeController);

container
  .bind(CONTROLLER_TYPES.ImageControllerType)
  .to(controllers.ImageController);

//services

container.bind(SERVICE_TYPES.CategoryServiceType).to(services.CategoryService);

container.bind(SERVICE_TYPES.ProductServiceType).to(services.ProductService);

container.bind(SERVICE_TYPES.ShopServiceType).to(services.ShopService);

container.bind(SERVICE_TYPES.ReceiptServiceType).to(services.ReceiptService);

container.bind(SERVICE_TYPES.TradeServiceType).to(services.TradeService);

container.bind(SERVICE_TYPES.UserServiceType).to(services.UserService);

container.bind(SERVICE_TYPES.ImageServiceType).to(services.ImageService);

//repositories

container
  .bind(REPOSITORY_TYPES.CategoryRepositoryType)
  .to(repositories.CategoryRepository);

container
  .bind(REPOSITORY_TYPES.ProductRepositoryType)
  .to(repositories.ProductRepository);

container
  .bind(REPOSITORY_TYPES.ReceiptRepositoryType)
  .to(repositories.ReceiptRepository);

container
  .bind(REPOSITORY_TYPES.ShopRepositoryType)
  .to(repositories.ShopRepository);

container
  .bind(REPOSITORY_TYPES.UserRepositoryType)
  .to(repositories.UserRepository);

container
  .bind(REPOSITORY_TYPES.ImageRepositoryType)
  .to(repositories.ImageRepository);

//app

container.bind(APP_TYPES.Server).to(Server);
container.bind(APP_TYPES.App).to(StartUp);

export default container;
