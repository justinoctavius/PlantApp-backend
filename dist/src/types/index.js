"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APP_TYPES = exports.DOMAIN_TYPES = exports.CONTROLLER_TYPES = exports.SERVICE_TYPES = exports.REPOSITORY_TYPES = void 0;
const REPOSITORY_TYPES = {
    UserRepositoryType: Symbol.for('UserRepositoryType'),
    ShopRepositoryType: Symbol.for('ShopRepositoryType'),
    CategoryRepositoryType: Symbol.for('CategoryRepositoryType'),
    ReceiptRepositoryType: Symbol.for('ReceiptRepositoryType'),
    ProductRepositoryType: Symbol.for('ProductRepositoryType'),
};
exports.REPOSITORY_TYPES = REPOSITORY_TYPES;
const SERVICE_TYPES = {
    UserServiceType: Symbol.for('UserServiceType'),
    ShopServiceType: Symbol.for('ShopServiceType'),
    CategoryServiceType: Symbol.for('CategoryServiceType'),
    ReceiptServiceType: Symbol.for('ReceiptServiceType'),
    ProductServiceType: Symbol.for('ProductServiceType'),
    TradeServiceType: Symbol.for('TradeServiceType'),
};
exports.SERVICE_TYPES = SERVICE_TYPES;
const CONTROLLER_TYPES = {
    UserControllerType: Symbol.for('UserControllerType'),
    ShopControllerType: Symbol.for('ShopControllerType'),
    CategoryControllerType: Symbol.for('CategoryControllerType'),
    ReceiptControllerType: Symbol.for('ReceiptControllerType'),
    ProductControllerType: Symbol.for('ProductControllerType'),
    TradeControllerType: Symbol.for('TradeControllerType'),
};
exports.CONTROLLER_TYPES = CONTROLLER_TYPES;
const DOMAIN_TYPES = {
    User: Symbol.for('User'),
    Shop: Symbol.for('Shop'),
    Category: Symbol.for('Category'),
    Receipt: Symbol.for('Receipt'),
    Product: Symbol.for('Product'),
};
exports.DOMAIN_TYPES = DOMAIN_TYPES;
const APP_TYPES = {
    Config: Symbol.for('Config'),
    Server: Symbol.for('Server'),
    App: Symbol.for('App'),
};
exports.APP_TYPES = APP_TYPES;
//# sourceMappingURL=index.js.map