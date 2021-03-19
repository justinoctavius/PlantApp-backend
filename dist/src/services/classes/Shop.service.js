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
const ShopMapper_1 = require("./../../domain/mappers/ShopMapper");
const inversify_1 = require("inversify");
const types_1 = require("../../types");
const Shop_1 = require("../../domain/entities/Shop");
let ShopService = class ShopService {
    //=============================== Get all shop =========================================
    getAllShopAsync(offset) {
        return __awaiter(this, void 0, void 0, function* () {
            const shops = yield this._shopRepository.getAllShopAsync(offset);
            if (!shops) {
                return { msg: 'unable to get shops', payload: null, status: 500 };
            }
            const shopsDto = shops.map((shop) => ShopMapper_1.toShopDto(shop));
            return { msg: 'success', payload: shopsDto, status: 200 };
        });
    }
    //=============================== Get global shop =========================================
    getGlobalShopAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            const globalShop = yield this._shopRepository.getGlobalShopAsync();
            if (!globalShop) {
                return { msg: 'Global shop not found', payload: null, status: 500 };
            }
            const shopDto = ShopMapper_1.toShopDto(globalShop);
            return { msg: 'success', payload: shopDto, status: 200 };
        });
    }
    //=============================== Get shop by id =========================================
    getShopAsync(shop_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const shop = yield this._shopRepository.getShopAsync(shop_id);
            if (!shop) {
                return { msg: 'Shop not found', payload: null, status: 500 };
            }
            const shopDto = ShopMapper_1.toShopDto(shop);
            return { msg: 'success', payload: shopDto, status: 200 };
        });
    }
    //=============================== Update shop =========================================
    updateShopAsync({ name, description, shop_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const shop = new Shop_1.default([], name, description, false, null, shop_id);
            const shopUpdated = yield this._shopRepository.updateShopAsync(shop);
            if (!shopUpdated) {
                return { msg: 'unable to update shop', payload: null, status: 500 };
            }
            const shopDto = ShopMapper_1.toShopDto(shopUpdated);
            return { msg: 'success', payload: shopDto, status: 200 };
        });
    }
};
__decorate([
    inversify_1.inject(types_1.REPOSITORY_TYPES.ShopRepositoryType),
    __metadata("design:type", Object)
], ShopService.prototype, "_shopRepository", void 0);
ShopService = __decorate([
    inversify_1.injectable()
], ShopService);
exports.default = ShopService;
//# sourceMappingURL=Shop.service.js.map