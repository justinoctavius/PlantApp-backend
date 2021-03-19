"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toProductDto = exports.toDomainProduct = void 0;
const Product_1 = require("../entities/Product");
const toDomainProduct = (product) => {
    const { product_id, name, description, category_id, price, image_url, quantity, } = product;
    return new Product_1.default(product_id, name, description, category_id, price, image_url, quantity);
};
exports.toDomainProduct = toDomainProduct;
const toProductDto = (product) => {
    const productDto = {
        product_id: product.product_id,
        name: product.name,
        description: product.description,
        price: product.price,
        image_url: product.image_url,
        quantity: product.getQuantity(),
    };
    return productDto;
};
exports.toProductDto = toProductDto;
//# sourceMappingURL=ProductMapper.js.map