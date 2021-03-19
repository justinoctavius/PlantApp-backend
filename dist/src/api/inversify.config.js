"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const types_1 = require("../types");
const controllers_1 = require("./controllers");
const services_1 = require("./../services");
const repository_1 = require("../dal/repository");
const Server_1 = require("./Server");
const StartUp_1 = require("./StartUp");
const container = new inversify_1.Container();
//controllers
container
    .bind(types_1.CONTROLLER_TYPES.CategoryControllerType)
    .to(controllers_1.default.CategoryController);
container
    .bind(types_1.CONTROLLER_TYPES.ProductControllerType)
    .to(controllers_1.default.ProductController);
container
    .bind(types_1.CONTROLLER_TYPES.ReceiptControllerType)
    .to(controllers_1.default.ReceiptController);
container
    .bind(types_1.CONTROLLER_TYPES.ShopControllerType)
    .to(controllers_1.default.ShopController);
container
    .bind(types_1.CONTROLLER_TYPES.UserControllerType)
    .to(controllers_1.default.UserController);
container
    .bind(types_1.CONTROLLER_TYPES.TradeControllerType)
    .to(controllers_1.default.TradeController);
//services
container.bind(types_1.SERVICE_TYPES.CategoryServiceType).to(services_1.default.CategoryService);
container.bind(types_1.SERVICE_TYPES.ProductServiceType).to(services_1.default.ProductService);
container.bind(types_1.SERVICE_TYPES.ShopServiceType).to(services_1.default.ShopService);
container.bind(types_1.SERVICE_TYPES.ReceiptServiceType).to(services_1.default.ReceiptService);
container.bind(types_1.SERVICE_TYPES.TradeServiceType).to(services_1.default.TradeService);
container.bind(types_1.SERVICE_TYPES.UserServiceType).to(services_1.default.UserService);
//repositories
container
    .bind(types_1.REPOSITORY_TYPES.CategoryRepositoryType)
    .to(repository_1.default.CategoryRepository);
container
    .bind(types_1.REPOSITORY_TYPES.ProductRepositoryType)
    .to(repository_1.default.ProductRepository);
container
    .bind(types_1.REPOSITORY_TYPES.ReceiptRepositoryType)
    .to(repository_1.default.ReceiptRepository);
container
    .bind(types_1.REPOSITORY_TYPES.ShopRepositoryType)
    .to(repository_1.default.ShopRepository);
container
    .bind(types_1.REPOSITORY_TYPES.UserRepositoryType)
    .to(repository_1.default.UserRepository);
//app
container.bind(types_1.APP_TYPES.Server).to(Server_1.default);
container.bind(types_1.APP_TYPES.App).to(StartUp_1.default);
exports.default = container;
//# sourceMappingURL=inversify.config.js.map