"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(username, email, password, shop, admin = false, user_id = '') {
        this.username = username;
        this.email = email;
        this.shop = shop;
        this.admin = admin;
        this.user_id = user_id;
        this.password = password;
    }
}
exports.default = User;
//# sourceMappingURL=User.js.map