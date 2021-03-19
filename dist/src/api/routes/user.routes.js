"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const types_1 = require("../../types");
const inversify_config_1 = require("../inversify.config");
const route = express_1.Router();
const userController = inversify_config_1.default.get(types_1.CONTROLLER_TYPES.UserControllerType);
route.post('/signup', (req, res) => userController.signUpAsync(req, res));
route.post('/signin', (req, res) => userController.signInAsync(req, res));
exports.default = route;
//# sourceMappingURL=user.routes.js.map