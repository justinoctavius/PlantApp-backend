"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toShopDto = exports.toDomainShop = void 0;
const Shop_1 = require("../entities/Shop");
const CategoryMapper_1 = require("./CategoryMapper");
const toDomainShop = (shop) => {
    const { categories, money, global, shop_id, name, description } = shop;
    const domainCategories = categories === null || categories === void 0 ? void 0 : categories.map((category) => CategoryMapper_1.toDomainCategory(category));
    return new Shop_1.default(domainCategories, name, description, global, money, shop_id);
};
exports.toDomainShop = toDomainShop;
const toShopDto = (shop) => {
    var _a;
    const shopDto = {
        categories: (_a = shop.categories) === null || _a === void 0 ? void 0 : _a.map((category) => CategoryMapper_1.toCategoryDto(category)),
        money: shop.getMoney(),
        shop_id: shop.shop_id,
        global: shop.global,
        name: shop.name,
        description: shop.description,
    };
    return shopDto;
};
exports.toShopDto = toShopDto;
//# sourceMappingURL=ShopMapper.js.map