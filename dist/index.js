"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('./config/database');
const inversify_config_1 = require("./src/api/inversify.config");
const types_1 = require("./src/types");
const application = inversify_config_1.default.get(types_1.APP_TYPES.App);
application.start();
//# sourceMappingURL=index.js.map