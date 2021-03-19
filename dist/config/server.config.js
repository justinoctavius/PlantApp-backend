"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const shop_routes_1 = require("../src/api/routes/shop.routes");
const user_routes_1 = require("../src/api/routes/user.routes");
const category_routes_1 = require("../src/api/routes/category.routes");
const product_routes_1 = require("../src/api/routes/product.routes");
const receipt_routes_1 = require("../src/api/routes/receipt.routes");
const trade_routes_1 = require("../src/api/routes/trade.routes");
const serverConfig = (app) => {
    //middlewares
    app.use(express.json());
    //routes
    app.use('/api/', shop_routes_1.default);
    app.use('/api/', user_routes_1.default);
    app.use('/api/', category_routes_1.default);
    app.use('/api/', product_routes_1.default);
    app.use('/api/', receipt_routes_1.default);
    app.use('/api/', trade_routes_1.default);
};
exports.default = serverConfig;
//# sourceMappingURL=server.config.js.map