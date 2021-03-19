"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
const ShopMapper_1 = require("./../../../domain/mappers/ShopMapper");
const inversify_1 = require("inversify");
const Shop_model_1 = require("../../models/Shop.model");
let ShopRepository = class ShopRepository {
    //=============================== Get all shop =========================================
    getAllShopAsync(offset) {
        return __awaiter(this, void 0, void 0, function* () {
            const shops = yield Shop_model_1.default.findAll({ limit: 20, offset: offset * 20 });
            return shops.map((shop) => ShopMapper_1.toDomainShop(shop));
        });
    }
    //=============================== Get global shop =========================================
    getGlobalShopAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            const globalShop = yield Shop_model_1.default.findOne({ where: { global: true } });
            if (!globalShop)
                return null;
            return ShopMapper_1.toDomainShop(globalShop);
        });
    }
    //=============================== Get shop by id =========================================
    getShopAsync(shop_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const shop = yield Shop_model_1.default.findByPk(shop_id);
            if (!shop)
                return null;
            return ShopMapper_1.toDomainShop(shop);
        });
    }
    //=============================== Update shop =========================================
    updateShopAsync(shop) {
        return __awaiter(this, void 0, void 0, function* () {
            const shopToUpdate = yield Shop_model_1.default.findByPk(shop.shop_id);
            if (!shopToUpdate)
                return null;
            shopToUpdate.name = shop.name;
            shopToUpdate.description = shop.description;
            yield shopToUpdate.save();
            return ShopMapper_1.toDomainShop(shopToUpdate);
        });
    }
    //=============================== update money =========================================
    updateMoneyAsync(shop_id, money) {
        return __awaiter(this, void 0, void 0, function* () {
            const shop = yield Shop_model_1.default.findByPk(shop_id);
            if (!shop)
                return null;
            shop.money = money;
            yield shop.save();
            return ShopMapper_1.toDomainShop(shop);
        });
    }
};
ShopRepository = __decorate([
    inversify_1.injectable()
], ShopRepository);
exports.default = ShopRepository;
//# sourceMappingURL=Shop.repository.js.map