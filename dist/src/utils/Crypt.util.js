"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
class CryptUtil {
    static hash(password, salt) {
        return bcrypt.hashSync(password, salt);
    }
    static compare(password, encryptedPassword) {
        return bcrypt.compareSync(password, encryptedPassword);
    }
}
exports.default = CryptUtil;
//# sourceMappingURL=Crypt.util.js.map