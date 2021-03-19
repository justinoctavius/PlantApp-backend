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
const inversify_1 = require("inversify");
const uuid = require("uuid");
const CategoryMapper_1 = require("./../../../domain/mappers/CategoryMapper");
const Category_model_1 = require("../../models/Category.model");
const Shop_model_1 = require("../../models/Shop.model");
let CategoryRepository = class CategoryRepository {
    //===============================Get all category=========================================
    getAllCategoryAsync(shop_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const shop = yield Shop_model_1.default.findByPk(shop_id, { include: 'categories' });
            if (!shop)
                return null;
            return shop.categories.map((category) => CategoryMapper_1.toDomainCategory(category));
        });
    }
    //===============================get category=========================================
    getCategoryAsync(category_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield Category_model_1.default.findByPk(category_id);
            if (!category)
                return null;
            return CategoryMapper_1.toDomainCategory(category);
        });
    }
    //===============================insert category=========================================
    insertCategoryAsync(shop_id, category) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoryExist = yield this.getCategoryByNameAsync(shop_id, category.name);
            if (categoryExist)
                return null;
            const shop = yield Shop_model_1.default.findByPk(shop_id);
            if (!shop)
                return null;
            const categoryInstance = yield Category_model_1.default.create({
                category_id: uuid.v1(),
                products: category.products,
                name: category.name,
                description: category.description,
                image_url: category.image_url,
            });
            yield shop.$add('category', categoryInstance);
            return CategoryMapper_1.toDomainCategory(categoryInstance);
        });
    }
    //===============================remove category=========================================
    removeCategoryAsync(category_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield Category_model_1.default.findByPk(category_id);
            if (!category)
                return null;
            yield category.destroy();
            return CategoryMapper_1.toDomainCategory(category);
        });
    }
    //===============================update category=========================================
    updateCategoryAsync(category) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoryToUpdate = yield Category_model_1.default.findByPk(category.category_id);
            if (!categoryToUpdate)
                return null;
            categoryToUpdate.name = category.name;
            categoryToUpdate.description = category.description;
            categoryToUpdate.image_url = category.image_url;
            yield categoryToUpdate.save();
            return CategoryMapper_1.toDomainCategory(categoryToUpdate);
        });
    }
    //===============================Get category by name=========================================
    getCategoryByNameAsync(shop_id, category_name) {
        return __awaiter(this, void 0, void 0, function* () {
            const shop = yield Shop_model_1.default.findByPk(shop_id);
            const category = yield shop.$get('categories', {
                where: { name: category_name },
            });
            if (!category[0])
                return null;
            return CategoryMapper_1.toDomainCategory(category[0]);
        });
    }
};
CategoryRepository = __decorate([
    inversify_1.injectable()
], CategoryRepository);
exports.default = CategoryRepository;
//# sourceMappingURL=Category.repository.js.map