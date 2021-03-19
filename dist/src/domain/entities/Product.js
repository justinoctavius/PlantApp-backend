"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(product_id, name, description, category_id, price, image_url, quantity) {
        this.product_id = product_id;
        this.name = name;
        this.description = description;
        this.category_id = category_id;
        this.price = price;
        this.image_url = image_url;
        this.quantity = quantity;
    }
    getQuantity() {
        return this.quantity;
    }
    addProduct(quantity) {
        this.quantity = this.quantity + quantity;
    }
    reduceProduct(quantity) {
        this.quantity = this.quantity - quantity;
    }
}
exports.default = Product;
//# sourceMappingURL=Product.js.map