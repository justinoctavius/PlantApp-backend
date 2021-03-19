"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const UserMapper_1 = require("./../../../domain/mappers/UserMapper");
const sequelize_1 = require("sequelize");
const uuid = require("uuid");
const utils_1 = require("../../../utils");
const User_model_1 = require("../../models/User.model");
let UserRepository = class UserRepository {
    //===============================Get user by id=========================================
    getUserByIdAsync(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_model_1.default.findByPk(user_id, { include: 'shop' });
            if (!user)
                return null;
            return UserMapper_1.toDomainUser(user);
        });
    }
    //===============================Sign in=========================================
    signInAsync({ username, email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.getUserByAttributeAsync({
                username,
                email,
                include: { shop: 'shop', categories: 'categories' },
            });
            if (!user)
                return null;
            if (!utils_1.CryptUtil.compare(password, user.password))
                return null;
            return UserMapper_1.toDomainUser(user);
        });
    }
    //===============================Sign up=========================================
    signUpAsync(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = yield User_model_1.default.create({
                user_id: uuid.v1(),
                username: user.username,
                email: user.email,
                password: user.password,
                admin: user.admin,
            });
            const newShop = yield newUser.$create('shop', {
                receipts: [],
                categories: [],
                name: user.shop.name,
                description: user.shop.description,
                money: user.shop.getMoney(),
                global: user.shop.global,
                shop_id: uuid.v1(),
            });
            return UserMapper_1.toDomainUser(Object.assign(Object.assign({}, newUser), { shop: newShop }));
        });
    }
    //===============================Get user by attribute=========================================
    getUserByAttributeAsync({ username, email, include = null, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_model_1.default.findOne({
                where: { [sequelize_1.Op.or]: [{ username }, { email }] },
            });
            if (!user)
                return null;
            let shop = null;
            if (include) {
                if (include.shop)
                    shop = yield user.$get(include.shop);
                if (shop && include.categories) {
                    shop.categories = yield shop.$get(include.categories);
                }
            }
            return UserMapper_1.toDomainUser(Object.assign(Object.assign({}, user.dataValues), { shop }));
        });
    }
};
UserRepository = __decorate([
    inversify_1.injectable()
], UserRepository);
exports.default = UserRepository;
//# sourceMappingURL=User.repository.js.map