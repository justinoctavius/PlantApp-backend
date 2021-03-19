"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const types_1 = require("../../types");
const inversify_config_1 = require("../inversify.config");
const JWT_middleware_1 = require("../middlewares/JWT.middleware");
const route = express_1.Router();
const tradeController = inversify_config_1.default.get(types_1.CONTROLLER_TYPES.TradeControllerType);
route.post('/buy/', JWT_middleware_1.default.verifyToken, (req, res) => tradeController.buyProductAsync(req, res));
exports.default = route;
//# sourceMappingURL=trade.routes.js.map