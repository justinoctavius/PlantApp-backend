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
let ProductModel = class ProductModel extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.UUID,
        primaryKey: true,
        unique: true,
        allowNull: false,
    }),
    __metadata("design:type", String)
], ProductModel.prototype, "product_id", void 0);
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
], ProductModel.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.TEXT,
    }),
    __metadata("design:type", String)
], ProductModel.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.DOUBLE,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], ProductModel.prototype, "price", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], ProductModel.prototype, "image_url", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        defaultValue: 1,
    }),
    __metadata("design:type", Number)
], ProductModel.prototype, "quantity", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Category_model_1.default),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.UUID }),
    __metadata("design:type", String)
], ProductModel.prototype, "category_id", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Category_model_1.default),
    __metadata("design:type", Object)
], ProductModel.prototype, "category", void 0);
ProductModel = __decorate([
    sequelize_typescript_1.Table({
        tableName: 'product',
        timestamps: true,
    })
], ProductModel);
exports.default = ProductModel;
//# sourceMappingURL=Product.model.js.map