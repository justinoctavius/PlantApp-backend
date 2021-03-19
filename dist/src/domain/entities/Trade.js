"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./Product");
const Receipt_1 = require("./Receipt");
class Trade {
    constructor(user, user_category, shop, product, quantity) {
        this._user = user;
        this._shop = shop;
        this._product = product;
        this._userCategory = user_category;
        this._quantity = quantity;
    }
    buyProduct() {
        const newPrice = this._product.price - this._product.price * 0.2;
        const price = this._product.price * this._quantity;
        this._newProduct = new Product_1.default('', this._product.name, this._product.description, this._userCategory.category_id, newPrice, this._product.image_url, this._quantity);
        this._shop.addMoney(price);
        this._product.reduceProduct(this._quantity);
        this._user.shop.reduceMoney(price);
        return new Receipt_1.default(this._user.username, price, this._product.name, this._quantity, this._shop.name);
    }
}
exports.default = Trade;
//# sourceMappingURL=Trade.js.map