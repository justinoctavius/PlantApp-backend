"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toReceiptDto = exports.toDomainReceipt = void 0;
const Receipt_1 = require("../entities/Receipt");
const toDomainReceipt = (receipt) => {
    const { username, price, productName, quantity, shopName, receipt_id, } = receipt;
    return new Receipt_1.default(username, price, productName, quantity, shopName, receipt_id);
};
exports.toDomainReceipt = toDomainReceipt;
const toReceiptDto = (receipt) => {
    const receiptDto = {
        username: receipt.username,
        price: receipt.price,
        quantity: receipt.quantity,
        shopName: receipt.shopName,
        receipt_id: receipt.receipt_id,
        productName: receipt.productName,
    };
    return receiptDto;
};
exports.toReceiptDto = toReceiptDto;
//# sourceMappingURL=ReceiptMapper.js.map