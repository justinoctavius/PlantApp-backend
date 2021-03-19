"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Receipt {
    constructor(username, price, productName, quantity, discount, shopName, id) {
        this.username = username;
        this.price = price;
        this.productName = productName;
        this.quantity = quantity;
        this.date = Date.now();
        this.discount = discount;
        this.shopName = shopName;
        this.id = id;
    }
}
exports.default = Receipt;
//# sourceMappingURL=Receipt.js.map