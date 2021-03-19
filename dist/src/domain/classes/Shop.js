"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shop {
    constructor(category, name, description, global = false, money = 1000, shop_id = '') {
        this.category = category;
        this.money = money;
        this.global = global;
        this.name = name;
        this.description = description;
        this.shop_id = shop_id;
    }
    get Money() {
        return this.money;
    }
    reduceMoney(amount) {
        this.money = this.money - amount;
    }
    addMoney(amount) {
        this.money = this.money + amount;
    }
}
exports.default = Shop;
//# sourceMappingURL=Shop.js.map