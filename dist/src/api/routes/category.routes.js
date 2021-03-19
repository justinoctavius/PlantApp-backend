"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const types_1 = require("../../types");
const inversify_config_1 = require("../inversify.config");
const JWT_middleware_1 = require("../middlewares/JWT.middleware");
const route = express_1.Router();
const categoryController = inversify_config_1.default.get(types_1.CONTROLLER_TYPES.CategoryControllerType);
route.get('/category/:shop_id', JWT_middleware_1.default.verifyToken, (req, res) => categoryController.getAllCategoryAsync(req, res));
route.get('/one-category/:category_id', JWT_middleware_1.default.verifyToken, (req, res) => categoryController.getCategoryAsync(req, res));
route.post('/category/', JWT_middleware_1.default.verifyToken, (req, res) => categoryController.insertCategoryAsync(req, res));
route.put('/category/:category_id', JWT_middleware_1.default.verifyToken, (req, res) => categoryController.updateCategoryAsync(req, res));
route.delete('/category/:category_id/', JWT_middleware_1.default.verifyToken, (req, res) => categoryController.removeCategoryAsync(req, res));
exports.default = route;
//# sourceMappingURL=category.routes.js.map