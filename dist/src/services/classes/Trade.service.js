"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./../../../config/database");
const ReceiptMapper_1 = require("./../../domain/mappers/ReceiptMapper");
const inversify_1 = require("inversify");
const Category_1 = require("../../domain/entities/Category");
const types_1 = require("../../types");
const Trade_1 = require("../../domain/entities/Trade");
let TradeService = class TradeService {
    buyProductAsync(product_id, user_id, shop_id, quantity) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this._userRepository.getUserByIdAsync(user_id);
            if (!user)
                return { msg: "shop doesn't found", payload: null, status: 404 };
            const shop = yield this._shopRepository.getShopAsync(shop_id);
            if (!shop)
                return { msg: "shop doesn't found", payload: null, status: 404 };
            const product = yield this._productRepository.getProductAsync(product_id);
            if (!product)
                return { msg: "product doesn't found", payload: null, status: 404 };
            const shopCategory = yield this._categoryRepository.getCategoryAsync(product.category_id);
            let userCategory = yield this._categoryRepository.getCategoryByNameAsync(user.shop.shop_id, shopCategory.name);
            console.log(shopCategory);
            //verify the user money
            if (user.shop.getMoney() < product.price) {
                return { msg: "you don't have enough money", payload: null, status: 200 };
            }
            //verify the product quantity
            if (product.getQuantity() < quantity) {
                return {
                    msg: "shop doesn't have enough products",
                    payload: null,
                    status: 200,
                };
            }
            const t = yield database_1.sequelize.transaction();
            try {
                //verify the user category if not exist is created
                if (!userCategory) {
                    const newUserCategoryInstance = new Category_1.default([], shopCategory.name, shopCategory.description, shopCategory.image_url);
                    userCategory = yield this._categoryRepository.insertCategoryAsync(user.shop.shop_id, newUserCategoryInstance);
                }
                const trade = new Trade_1.default(user, userCategory, shop, product, quantity);
                const receipt = trade.buyProduct();
                //insert the user product
                const userProductExits = yield this._productRepository.getProductByNameAsync(userCategory.category_id, trade._newProduct.name);
                if (userProductExits) {
                    userProductExits.addProduct(quantity);
                    yield this._productRepository.updateProductAsync(userProductExits);
                }
                else {
                    yield this._productRepository.insertProductAsync(trade._newProduct);
                }
                //reduce the product
                if (trade._product.getQuantity() === 0) {
                    yield this._productRepository.removeProductAsync(trade._product.product_id);
                }
                else {
                    yield this._productRepository.updateProductAsync(trade._product);
                }
                //reduce the user money
                yield this._shopRepository.updateMoneyAsync(trade._user.shop.shop_id, trade._user.shop.getMoney());
                //add shop money
                yield this._shopRepository.updateMoneyAsync(trade._shop.shop_id, trade._shop.getMoney());
                const receiptSaved = yield this._receiptRepository.insertReceiptAsync(shop.shop_id, user.shop.shop_id, receipt);
                console.log(receiptSaved);
                const receiptDto = ReceiptMapper_1.toReceiptDto(receiptSaved);
                t.commit();
                return { msg: 'success', payload: receiptDto, status: 200 };
            }
            catch (error) {
                console.log(error);
                t.rollback();
            }
        });
    }
    sellProductAsync(product_id, user_id, shop_id, quantity) {
        return __awaiter(this, void 0, void 0, function* () {
            return {};
        });
    }
};
__decorate([
    inversify_1.inject(types_1.REPOSITORY_TYPES.UserRepositoryType),
    __metadata("design:type", Object)
], TradeService.prototype, "_userRepository", void 0);
__decorate([
    inversify_1.inject(types_1.REPOSITORY_TYPES.ShopRepositoryType),
    __metadata("design:type", Object)
], TradeService.prototype, "_shopRepository", void 0);
__decorate([
    inversify_1.inject(types_1.REPOSITORY_TYPES.ProductRepositoryType),
    __metadata("design:type", Object)
], TradeService.prototype, "_productRepository", void 0);
__decorate([
    inversify_1.inject(types_1.REPOSITORY_TYPES.CategoryRepositoryType),
    __metadata("design:type", Object)
], TradeService.prototype, "_categoryRepository", void 0);
__decorate([
    inversify_1.inject(types_1.REPOSITORY_TYPES.ReceiptRepositoryType),
    __metadata("design:type", Object)
], TradeService.prototype, "_receiptRepository", void 0);
TradeService = __decorate([
    inversify_1.injectable()
], TradeService);
exports.default = TradeService;
//# sourceMappingURL=Trade.service.js.map