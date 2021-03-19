"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Receipt {
    constructor(username, price, productName, quantity, shopName, receipt_id = '') {
        this.username = username;
        this.price = price;
        this.productName = productName;
        this.quantity = quantity;
        this.date = Date.now();
        this.shopName = shopName;
        this.receipt_id = receipt_id;
    }
}
exports.default = Receipt;
//# sourceMappingURL=Receipt.js.map