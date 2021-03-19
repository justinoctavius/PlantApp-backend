"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
const UserMapper_1 = require("./../../domain/mappers/UserMapper");
const Shop_1 = require("../../domain/entities/Shop");
const User_1 = require("../../domain/entities/User");
const types_1 = require("../../types");
const utils_1 = require("../../utils");
let UserService = class UserService {
    //===============================Get user by name =========================================
    getUserAsync(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return {};
        });
    }
    //===============================Sign In =========================================
    signInAsync({ username, email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = new User_1.default(username, email, password, null);
            console.log(user);
            const userSignedIn = yield this._userRepository.signInAsync(user);
            if (!userSignedIn) {
                return {
                    msg: 'username, email or password incorrect',
                    payload: null,
                    status: 500,
                };
            }
            const userDTO = UserMapper_1.toUserDTO(userSignedIn);
            const token = utils_1.JWTUtil.sign(userSignedIn.user_id);
            return {
                msg: 'success',
                payload: { user: userDTO, token },
                status: 200,
            };
        });
    }
    //===============================Sign up =========================================
    signUpAsync({ username, email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this._userRepository.getUserByAttributeAsync({
                username,
                email,
            });
            if (user)
                return { msg: 'user already exist', payload: null, status: 500 };
            const shopName = username + ' shop';
            const shopDescription = 'This is your shop, try to buy something in the global shop';
            const newShop = new Shop_1.default([], shopName, shopDescription);
            const newUser = new User_1.default(username, email, password, newShop);
            const userSignedUp = yield this._userRepository.signUpAsync(newUser);
            console.log(userSignedUp);
            if (userSignedUp) {
                const userDto = UserMapper_1.toUserDTO(userSignedUp);
                const token = utils_1.JWTUtil.sign(userSignedUp.user_id);
                return { msg: 'success', payload: { user: userDto, token }, status: 200 };
            }
            return { msg: 'error', payload: null, status: 500 };
        });
    }
};
__decorate([
    inversify_1.inject(types_1.REPOSITORY_TYPES.UserRepositoryType),
    __metadata("design:type", Object)
], UserService.prototype, "_userRepository", void 0);
UserService = __decorate([
    inversify_1.injectable()
], UserService);
exports.default = UserService;
//# sourceMappingURL=User.service.js.map