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
const CategoryMapper_1 = require("./../../domain/mappers/CategoryMapper");
const inversify_1 = require("inversify");
const types_1 = require("../../types");
const Category_1 = require("../../domain/entities/Category");
let CategoryService = class CategoryService {
    //===============================Get All Categories =========================================
    getAllCategoryAsync(shop_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const categories = yield this._categoryRepository.getAllCategoryAsync(shop_id);
            if (!categories)
                return { msg: "category doesn't exist", payload: null, status: 404 };
            const categoriesDto = categories.map((category) => CategoryMapper_1.toCategoryDto(category));
            return { msg: 'success', payload: categoriesDto };
        });
    }
    //===============================Insert category =========================================
    insertCategoryAsync(shop_id, { name, description, image_url }) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = new Category_1.default([], name, description, image_url);
            const categoryInserted = yield this._categoryRepository.insertCategoryAsync(shop_id, category);
            if (!categoryInserted)
                return { msg: 'unable to insert category', payload: null, status: 404 };
            const categoryDto = CategoryMapper_1.toCategoryDto(categoryInserted);
            return { msg: 'success', payload: categoryDto, status: 200 };
        });
    }
    //===============================get category by id =========================================
    getCategoryAsync(category_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield this._categoryRepository.getCategoryAsync(category_id);
            if (!category)
                return { msg: "category doesn't exist", payload: null, status: 404 };
            const categoryDto = CategoryMapper_1.toCategoryDto(category);
            return { msg: 'success', payload: categoryDto, status: 200 };
        });
    }
    //===============================remove category =========================================
    removeCategoryAsync(category_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoryDeleted = yield this._categoryRepository.removeCategoryAsync(category_id);
            if (!categoryDeleted)
                return {
                    msg: 'unable to delete category',
                    payload: categoryDeleted,
                    status: 200,
                };
            const categoryDeletedDto = CategoryMapper_1.toCategoryDto(categoryDeleted);
            return { msg: 'success', payload: categoryDeletedDto, status: 200 };
        });
    }
    //===============================Update Category =========================================
    updateCategoryAsync({ category_id, name, description, image_url, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = new Category_1.default([], name, description, image_url, category_id);
            const categoryUpdated = yield this._categoryRepository.updateCategoryAsync(category);
            if (!categoryUpdated) {
                return {
                    msg: 'unable to update the category',
                    payload: null,
                    status: 500,
                };
            }
            const categoryDto = CategoryMapper_1.toCategoryDto(categoryUpdated);
            return { msg: 'success', payload: categoryDto, status: 200 };
        });
    }
};
__decorate([
    inversify_1.inject(types_1.REPOSITORY_TYPES.CategoryRepositoryType),
    __metadata("design:type", Object)
], CategoryService.prototype, "_categoryRepository", void 0);
CategoryService = __decorate([
    inversify_1.injectable()
], CategoryService);
exports.default = CategoryService;
//# sourceMappingURL=Category.service.js.map