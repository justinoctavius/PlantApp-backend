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
const ReceiptMapper_1 = require("./../../../domain/mappers/ReceiptMapper");
const inversify_1 = require("inversify");
const Receipt_model_1 = require("../../models/Receipt.model");
const Shop_model_1 = require("../../models/Shop.model");
const ReceiptShop_model_1 = require("../../models/ReceiptShop.model");
const uuid = require("uuid");
let ReceiptRepository = class ReceiptRepository {
    //===============================Get all receipt=========================================
    getAllReceiptAsync(shop_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const shop = yield Shop_model_1.default.findByPk(shop_id);
            if (!shop)
                return null;
            const receipts = yield shop.$get('receipts');
            if (!receipts[0])
                return null;
            return receipts.map((receipt) => ReceiptMapper_1.toDomainReceipt(receipt));
        });
    }
    //===============================Get receipt=========================================
    getReceiptAsync(receipt_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const receipt = yield Receipt_model_1.default.findByPk(receipt_id);
            if (!receipt)
                return null;
            return ReceiptMapper_1.toDomainReceipt(receipt);
        });
    }
    //===============================Insert receipt=========================================
    insertReceiptAsync(shop_id, user_shop_id, receipt) {
        return __awaiter(this, void 0, void 0, function* () {
            const receiptInstance = yield Receipt_model_1.default.create({
                receipt_id: uuid.v1(),
                username: receipt.username,
                quantity: receipt.quantity,
                productName: receipt.productName,
                price: receipt.price,
                date: receipt.date,
                shopName: receipt.shopName,
            });
            yield ReceiptShop_model_1.default.create({
                shop_id,
                receipt_id: receiptInstance.receipt_id,
            });
            yield ReceiptShop_model_1.default.create({
                shop_id: user_shop_id,
                receipt_id: receiptInstance.receipt_id,
            });
            return ReceiptMapper_1.toDomainReceipt(receiptInstance);
        });
    }
};
ReceiptRepository = __decorate([
    inversify_1.injectable()
], ReceiptRepository);
exports.default = ReceiptRepository;
//# sourceMappingURL=Receipt.repository.js.map