"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCategoryDto = exports.toDomainCategory = void 0;
const Category_1 = require("../entities/Category");
const ProductMapper_1 = require("./ProductMapper");
const toDomainCategory = (category) => {
    const { products, name, category_id, description, image_url } = category;
    const domainProducts = products === null || products === void 0 ? void 0 : products.map((product) => ProductMapper_1.toDomainProduct(product));
    return new Category_1.default(domainProducts, name, description, image_url, category_id);
};
exports.toDomainCategory = toDomainCategory;
const toCategoryDto = (category) => {
    var _a;
    const categoryDto = {
        products: (_a = category.products) === null || _a === void 0 ? void 0 : _a.map((product) => ProductMapper_1.toProductDto(product)),
        name: category.name,
        category_id: category.category_id,
        description: category.description,
        image_url: category.image_url,
    };
    return categoryDto;
};
exports.toCategoryDto = toCategoryDto;
//# sourceMappingURL=CategoryMapper.js.map