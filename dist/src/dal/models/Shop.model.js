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
const Category_model_1 = require("./Category.model");
const Receipt_model_1 = require("./Receipt.model");
const ReceiptShop_model_1 = require("./ReceiptShop.model");
const User_model_1 = require("./User.model");
let ShopModel = class ShopModel extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.UUID,
        primaryKey: true,
        unique: true,
        allowNull: false,
    }),
    __metadata("design:type", String)
], ShopModel.prototype, "shop_id", void 0);
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
], ShopModel.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.TEXT,
    }),
    __metadata("design:type", String)
], ShopModel.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }),
    __metadata("design:type", Boolean)
], ShopModel.prototype, "global", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.DOUBLE,
        allowNull: false,
        defaultValue: 1000,
    }),
    __metadata("design:type", Number)
], ShopModel.prototype, "money", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_model_1.default),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.UUID }),
    __metadata("design:type", String)
], ShopModel.prototype, "user_id", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_model_1.default),
    __metadata("design:type", Object)
], ShopModel.prototype, "user", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => Receipt_model_1.default, () => ReceiptShop_model_1.default),
    __metadata("design:type", Array)
], ShopModel.prototype, "receipts", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => Category_model_1.default),
    __metadata("design:type", Array)
], ShopModel.prototype, "categories", void 0);
ShopModel = __decorate([
    sequelize_typescript_1.Table({
        tableName: 'shop',
        timestamps: true,
    })
], ShopModel);
exports.default = ShopModel;
//# sourceMappingURL=Shop.model.js.map