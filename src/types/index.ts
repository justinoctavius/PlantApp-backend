const REPOSITORY_TYPES = {
  UserRepositoryType: Symbol.for('UserRepositoryType'),
  ShopRepositoryType: Symbol.for('ShopRepositoryType'),
  CategoryRepositoryType: Symbol.for('CategoryRepositoryType'),
  ReceiptRepositoryType: Symbol.for('ReceiptRepositoryType'),
  ProductRepositoryType: Symbol.for('ProductRepositoryType'),
  ImageRepositoryType: Symbol.for('ImageRepositoryType'),
};

const SERVICE_TYPES = {
  UserServiceType: Symbol.for('UserServiceType'),
  ShopServiceType: Symbol.for('ShopServiceType'),
  CategoryServiceType: Symbol.for('CategoryServiceType'),
  ReceiptServiceType: Symbol.for('ReceiptServiceType'),
  ProductServiceType: Symbol.for('ProductServiceType'),
  TradeServiceType: Symbol.for('TradeServiceType'),
  ImageServiceType: Symbol.for('ImageServiceType'),
};

const CONTROLLER_TYPES = {
  UserControllerType: Symbol.for('UserControllerType'),
  ShopControllerType: Symbol.for('ShopControllerType'),
  CategoryControllerType: Symbol.for('CategoryControllerType'),
  ReceiptControllerType: Symbol.for('ReceiptControllerType'),
  ProductControllerType: Symbol.for('ProductControllerType'),
  TradeControllerType: Symbol.for('TradeControllerType'),
  ImageControllerType: Symbol.for('ImageControllerType'),
};

const DOMAIN_TYPES = {
  User: Symbol.for('User'),
  Shop: Symbol.for('Shop'),
  Category: Symbol.for('Category'),
  Receipt: Symbol.for('Receipt'),
  Product: Symbol.for('Product'),
};

const APP_TYPES = {
  Config: Symbol.for('Config'),
  Server: Symbol.for('Server'),
  App: Symbol.for('App'),
};

export {
  REPOSITORY_TYPES,
  SERVICE_TYPES,
  CONTROLLER_TYPES,
  DOMAIN_TYPES,
  APP_TYPES,
};
