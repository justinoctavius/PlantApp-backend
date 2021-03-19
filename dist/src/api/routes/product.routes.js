"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const types_1 = require("../../types");
const inversify_config_1 = require("../inversify.config");
const JWT_middleware_1 = require("../middlewares/JWT.middleware");
const route = express_1.Router();
const productController = inversify_config_1.default.get(types_1.CONTROLLER_TYPES.ProductControllerType);
route.get('/product/:category_id', JWT_middleware_1.default.verifyToken, (req, res) => productController.getAllProductAsync(req, res));
route.get('/one-product/:product_id', JWT_middleware_1.default.verifyToken, (req, res) => productController.getProductAsync(req, res));
route.post('/product/', JWT_middleware_1.default.verifyToken, (req, res) => productController.insertProductAsync(req, res));
route.put('/product/:product_id', JWT_middleware_1.default.verifyToken, (req, res) => productController.updateProductAsync(req, res));
route.delete('/product/:product_id', JWT_middleware_1.default.verifyToken, (req, res) => productController.removeProductAsync(req, res));
exports.default = route;
//# sourceMappingURL=product.routes.js.map