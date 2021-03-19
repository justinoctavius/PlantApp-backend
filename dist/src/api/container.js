"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const awilix_1 = require("awilix");
const repository_1 = require("../dal/repository");
const services_1 = require("../services/");
const entities_1 = require("../domain/entities");
const controllers_1 = require("./controllers");
const config_1 = require("../../config");
const Server_1 = require("./Server");
const StartUp_1 = require("./StartUp");
const container = awilix_1.createContainer();
//repositories
container.register({
    userRepository: awilix_1.asClass(repository_1.default.UserRepository).singleton(),
    shopRepository: awilix_1.asClass(repository_1.default.ShopRepository).singleton(),
    categoryRepository: awilix_1.asClass(repository_1.default.CategoryRepository).singleton(),
    receiptRepository: awilix_1.asClass(repository_1.default.ReceiptRepository).singleton(),
    productRepository: awilix_1.asClass(repository_1.default.ProductRepository).singleton(),
});
//services
container.register({
    userService: awilix_1.asClass(services_1.default.UserService).singleton(),
    shopService: awilix_1.asClass(services_1.default.ShopService).singleton(),
    categoryService: awilix_1.asClass(services_1.default.CategoryService).singleton(),
    receiptService: awilix_1.asClass(services_1.default.ReceiptService).singleton(),
    productService: awilix_1.asClass(services_1.default.ProductService).singleton(),
    tradeService: awilix_1.asClass(services_1.default.TradeService).singleton(),
});
//controllers
container.register({
    userController: awilix_1.asClass(controllers_1.default.UserController).singleton(),
    shopController: awilix_1.asClass(controllers_1.default.ShopController).singleton(),
    categoryController: awilix_1.asClass(controllers_1.default.CategoryController).singleton(),
    receiptController: awilix_1.asClass(controllers_1.default.ReceiptController).singleton(),
    productController: awilix_1.asClass(controllers_1.default.ProductController).singleton(),
    tradeController: awilix_1.asClass(controllers_1.default.TradeController).singleton(),
});
//entities
container.register({
    user: awilix_1.asClass(entities_1.default.User),
    shop: awilix_1.asClass(entities_1.default.Shop),
    category: awilix_1.asClass(entities_1.default.Category),
    receipt: awilix_1.asClass(entities_1.default.Receipt),
    product: awilix_1.asClass(entities_1.default.Product),
});
//app start up
container.register({
    config: awilix_1.asValue(config_1.default),
    server: awilix_1.asClass(Server_1.default).singleton(),
    app: awilix_1.asClass(StartUp_1.default).singleton(),
});
exports.default = container;
//# sourceMappingURL=container.js.map