"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUserDTO = exports.toDomainUser = void 0;
const ShopMapper_1 = require("./ShopMapper");
const User_1 = require("../entities/User");
const toDomainUser = (user) => {
    const { username, email, shop, user_id, admin, password } = user;
    const domainShop = shop ? ShopMapper_1.toDomainShop(shop) : null;
    return new User_1.default(username, email, password, domainShop, admin, user_id);
};
exports.toDomainUser = toDomainUser;
const toUserDTO = (user) => {
    const UserDto = {
        username: user.username,
        email: user.email,
        shop: user.shop ? ShopMapper_1.toShopDto(user.shop) : null,
        user_id: user.user_id,
    };
    return UserDto;
};
exports.toUserDTO = toUserDTO;
//# sourceMappingURL=UserMapper.js.map