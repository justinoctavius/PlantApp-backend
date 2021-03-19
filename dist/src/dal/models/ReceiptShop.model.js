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
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const Receipt_model_1 = require("./Receipt.model");
const Shop_model_1 = require("./Shop.model");
let ReceiptShop = class ReceiptShop extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.ForeignKey(() => Receipt_model_1.default),
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.UUID,
    }),
    __metadata("design:type", String)
], ReceiptShop.prototype, "receipt_id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Shop_model_1.default),
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.UUID,
    }),
    __metadata("design:type", String)
], ReceiptShop.prototype, "shop_id", void 0);
ReceiptShop = __decorate([
    sequelize_typescript_1.Table
], ReceiptShop);
exports.default = ReceiptShop;
//# sourceMappingURL=ReceiptShop.model.js.map