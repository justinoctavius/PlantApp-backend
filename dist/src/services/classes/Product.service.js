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
const ProductMapper_1 = require("./../../domain/mappers/ProductMapper");
const inversify_1 = require("inversify");
const types_1 = require("../../types");
const Product_1 = require("../../domain/entities/Product");
let ProductService = class ProductService {
    //==============================Get all products=================================================
    getAllProductAsync(category_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield this._productRepository.getAllProductAsync(category_id);
            if (!products)
                return { msg: "category doesn't exist", payload: null, status: 404 };
            const productsDto = products.map((product) => ProductMapper_1.toProductDto(product));
            return { msg: 'success', payload: productsDto, status: 200 };
        });
    }
    //==================================Get product=============================================
    getProductAsync(product_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield this._productRepository.getProductAsync(product_id);
            if (!product)
                return { msg: "product doesn't exist", payload: null, status: 404 };
            const productDto = ProductMapper_1.toProductDto(product);
            return { msg: 'success', payload: productDto, status: 200 };
        });
    }
    //====================================Insert product===========================================
    insertProductAsync({ product_id, name, description, category_id, price, image_url, quantity, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const productExist = yield this._productRepository.getProductByNameAsync(category_id, name);
            if (productExist)
                return { msg: 'product already exists', payload: null, status: 500 };
            const newProduct = new Product_1.default(product_id, name, description, category_id, price, image_url, quantity);
            const productInserted = yield this._productRepository.insertProductAsync(newProduct);
            if (!productInserted)
                return { msg: 'unable to insert product', payload: null, status: 500 };
            const productDto = ProductMapper_1.toProductDto(productInserted);
            return { msg: 'success', payload: productDto, status: 200 };
        });
    }
    //===================================Remove Product============================================
    removeProductAsync(product_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const productDeleted = yield this._productRepository.removeProductAsync(product_id);
            if (!productDeleted)
                return { msg: 'unable to remove product', payload: null, status: 500 };
            const productDto = ProductMapper_1.toProductDto(productDeleted);
            return { msg: 'success', payload: productDto, status: 200 };
        });
    }
    //====================================Update Product===========================================
    updateProductAsync({ name, description, category_id, price, image_url, quantity, product_id, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = new Product_1.default(product_id, name, description, category_id, price, image_url, quantity);
            console.log(product);
            const productUpdated = yield this._productRepository.updateProductAsync(product);
            if (!productUpdated)
                return { msg: 'unable to update product', payload: null, status: 500 };
            const productDto = ProductMapper_1.toProductDto(productUpdated);
            return { msg: 'success', payload: productDto, status: 200 };
        });
    }
};
__decorate([
    inversify_1.inject(types_1.REPOSITORY_TYPES.ProductRepositoryType),
    __metadata("design:type", Object)
], ProductService.prototype, "_productRepository", void 0);
ProductService = __decorate([
    inversify_1.injectable()
], ProductService);
exports.default = ProductService;
//# sourceMappingURL=Product.service.js.map