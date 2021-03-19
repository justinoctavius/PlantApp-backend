"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const types_1 = require("../../types");
const inversify_config_1 = require("../inversify.config");
const JWT_middleware_1 = require("../middlewares/JWT.middleware");
const route = express_1.Router();
const shopController = inversify_config_1.default.get(types_1.CONTROLLER_TYPES.ShopControllerType);
route.get('/shop/:offset', JWT_middleware_1.default.verifyToken, (req, res) => shopController.getAllShopAsync(req, res));
route.get('/shop-global', JWT_middleware_1.default.verifyToken, (req, res) => shopController.getGlobalShopAsync(req, res));
route.get('/one-shop/:shop_id', JWT_middleware_1.default.verifyToken, (req, res) => shopController.getShopAsync(req, res));
route.put('/shop/:shop_id', JWT_middleware_1.default.verifyToken, (req, res) => shopController.updateShopAsync(req, res));
exports.default = route;
//# sourceMappingURL=shop.routes.js.map