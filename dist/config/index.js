"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_config_1 = require("./server.config");
const environments_1 = require("./environments");
const database_1 = require("./database");
exports.default = {
    serverConfig: server_config_1.default,
    env: environments_1.default,
    sequelize: database_1.sequelize,
};
//# sourceMappingURL=index.js.map