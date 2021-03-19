"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const types_1 = require("../../types");
const inversify_config_1 = require("../inversify.config");
const JWT_middleware_1 = require("../middlewares/JWT.middleware");
const route = express_1.Router();
const receiptController = inversify_config_1.default.get(types_1.CONTROLLER_TYPES.ReceiptControllerType);
route.get('/receipt/:shop_id', JWT_middleware_1.default.verifyToken, (req, res) => receiptController.getAllReceiptAsync(req, res));
route.get('/one-receipt/:receipt_id', JWT_middleware_1.default.verifyToken, (req, res) => receiptController.getReceiptAsync(req, res));
exports.default = route;
//# sourceMappingURL=receipt.routes.js.map