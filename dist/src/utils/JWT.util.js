"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const config_1 = require("../../config");
class JWTUtil {
    static sign(user_id) {
        const exp = Math.floor(Date.now() / 1000) + 3 * 60 * 60;
        return jwt.sign({ data: user_id, exp }, config_1.default.env.JWT_SECRECT);
    }
    static verify(token) {
        try {
            return jwt.verify(token, config_1.default.env.JWT_SECRECT);
        }
        catch (error) {
            return false;
        }
    }
}
exports.default = JWTUtil;
//# sourceMappingURL=JWT.util.js.map