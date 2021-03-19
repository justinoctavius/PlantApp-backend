"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Category {
    constructor(products, name, description, image_url, category_id = '') {
        this.products = products;
        this.name = name;
        this.description = description;
        this.category_id = category_id;
        this.image_url = image_url;
    }
}
exports.default = Category;
//# sourceMappingURL=Category.js.map