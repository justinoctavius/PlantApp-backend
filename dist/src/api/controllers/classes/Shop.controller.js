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
const inversify_1 = require("inversify");
const types_1 = require("../../../types");
let ShopController = class ShopController {
    getAllShopAsync(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { offset } = req.params;
            const response = yield this._shopService.getAllShopAsync(offset);
            res.json(response).status(response.status);
        });
    }
    getGlobalShopAsync(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this._shopService.getGlobalShopAsync();
            res.json(response).status(response.status);
        });
    }
    getShopAsync(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { shop_id } = req.params;
            const response = yield this._shopService.getShopAsync(shop_id);
            res.json(response).status(response.status);
        });
    }
    updateShopAsync(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { shop_id } = req.params;
            const { name, description } = req.body;
            const response = yield this._shopService.updateShopAsync({
                shop_id,
                name,
                description,
            });
            res.json(response).status(response.status);
        });
    }
};
__decorate([
    inversify_1.inject(types_1.SERVICE_TYPES.ShopServiceType),
    __metadata("design:type", Object)
], ShopController.prototype, "_shopService", void 0);
ShopController = __decorate([
    inversify_1.injectable()
], ShopController);
exports.default = ShopController;
//# sourceMappingURL=Shop.controller.js.map