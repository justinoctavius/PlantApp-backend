"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const development_1 = require("./development");
const production_1 = require("./production");
let current_env;
if (process.env.NODE_ENV !== 'dev') {
    current_env = production_1.default;
}
else {
    current_env = development_1.default;
}
exports.default = current_env;
//# sourceMappingURL=index.js.map