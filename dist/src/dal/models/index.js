"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Category_model_1 = require("./Category.model");
const Product_model_1 = require("./Product.model");
const Receipt_model_1 = require("./Receipt.model");
const Shop_model_1 = require("./Shop.model");
const User_model_1 = require("./User.model");
Category_model_1.default.hasMany(Product_model_1.default);
Product_model_1.default.belongsTo(Category_model_1.default, { foreignKey: { allowNull: false } });
Shop_model_1.default.hasMany(Category_model_1.default);
Category_model_1.default.belongsTo(Shop_model_1.default, { foreignKey: { allowNull: false } });
User_model_1.default.hasOne(Shop_model_1.default);
Shop_model_1.default.belongsTo(User_model_1.default);
Shop_model_1.default.hasMany(Receipt_model_1.default);
Receipt_model_1.default.hasOne(Shop_model_1.default);
User_model_1.default.hasMany(Receipt_model_1.default);
Receipt_model_1.default.belongsTo(User_model_1.default);
exports.default = {
    CategoryModel: Category_model_1.default,
    ProductModel: Product_model_1.default,
    ReceiptModel: Receipt_model_1.default,
    ShopModel: Shop_model_1.default,
    UserModel: User_model_1.default,
};
//# sourceMappingURL=index.js.map