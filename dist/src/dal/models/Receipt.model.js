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
const ReceiptShop_model_1 = require("./ReceiptShop.model");
const Shop_model_1 = require("./Shop.model");
let ReceiptModel = class ReceiptModel extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.UUID,
        primaryKey: true,
        unique: true,
        allowNull: false,
    }),
    __metadata("design:type", String)
], ReceiptModel.prototype, "receipt_id", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING,
        validate: {
            min: 5,
            max: 20,
        },
        allowNull: false,
    }),
    __metadata("design:type", String)
], ReceiptModel.prototype, "productName", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], ReceiptModel.prototype, "username", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.DOUBLE,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], ReceiptModel.prototype, "price", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], ReceiptModel.prototype, "quantity", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.DATE,
        defaultValue: Date.now(),
        allowNull: false,
    }),
    __metadata("design:type", Number)
], ReceiptModel.prototype, "date", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], ReceiptModel.prototype, "shopName", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => Shop_model_1.default, () => ReceiptShop_model_1.default),
    __metadata("design:type", Array)
], ReceiptModel.prototype, "shops", void 0);
ReceiptModel = __decorate([
    sequelize_typescript_1.Table({
        tableName: 'receipt',
        timestamps: true,
    })
], ReceiptModel);
exports.default = ReceiptModel;
//# sourceMappingURL=Receipt.model.js.map