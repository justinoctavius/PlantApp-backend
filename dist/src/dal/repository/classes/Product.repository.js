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
const ProductMapper_1 = require("./../../../domain/mappers/ProductMapper");
const inversify_1 = require("inversify");
const Category_model_1 = require("../../models/Category.model");
const Product_model_1 = require("../../models/Product.model");
const uuid = require("uuid");
let ProductRepository = class ProductRepository {
    //===============================Get all product=========================================
    getAllProductAsync(category_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield Category_model_1.default.findByPk(category_id);
            if (!category)
                return null;
            const products = yield category.$get('products');
            return products.map((product) => ProductMapper_1.toDomainProduct(product));
        });
    }
    //===============================Get product=========================================
    getProductAsync(product_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield Product_model_1.default.findByPk(product_id);
            if (!product)
                return null;
            return ProductMapper_1.toDomainProduct(product);
        });
    }
    //===============================Insert product=========================================
    insertProductAsync(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const productExist = yield this.getProductByNameAsync(product.category_id, product.name);
            if (productExist)
                return null;
            const category = yield Category_model_1.default.findByPk(product.category_id);
            if (!category)
                return null;
            const productInstance = yield Product_model_1.default.create({
                product_id: uuid.v1(),
                name: product.name,
                description: product.description,
                price: product.price,
                image_url: product.image_url,
                quantity: product.getQuantity(),
            });
            yield category.$add('product', productInstance);
            return ProductMapper_1.toDomainProduct(productInstance);
        });
    }
    //===============================Remove product=========================================
    removeProductAsync(product_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield Product_model_1.default.findByPk(product_id);
            if (!product)
                return null;
            yield product.destroy();
            return ProductMapper_1.toDomainProduct(product);
        });
    }
    //===============================Update product=========================================
    updateProductAsync(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const productToUpdate = yield Product_model_1.default.findByPk(product.product_id);
            if (!productToUpdate)
                return null;
            productToUpdate.name = product.name;
            productToUpdate.description = product.description;
            productToUpdate.quantity = product.getQuantity();
            productToUpdate.price = product.price;
            productToUpdate.image_url = product.image_url;
            yield productToUpdate.save();
            return ProductMapper_1.toDomainProduct(productToUpdate);
        });
    }
    //===============================Get product by name =========================================
    getProductByNameAsync(category_id, product_name) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield Category_model_1.default.findByPk(category_id);
            const product = yield category.$get('products', {
                where: { name: product_name },
            });
            if (!product[0])
                return null;
            return ProductMapper_1.toDomainProduct(product[0]);
        });
    }
};
ProductRepository = __decorate([
    inversify_1.injectable()
], ProductRepository);
exports.default = ProductRepository;
//# sourceMappingURL=Product.repository.js.map