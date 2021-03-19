import { toDomainReceipt } from '../../../domain/mappers/Receipt.mapper';
import { injectable } from 'inversify';

import IReceipt from '../../../domain/interfaces/IReceipt';
import IReceiptRepository from '../interfaces/IReceipt.repository';

import ReceiptModel from '../../models/Receipt.model';
import ShopModel from '../../models/Shop.model';
import ReceiptShop from '../../models/ReceiptShop.model';

import * as uuid from 'uuid';

@injectable()
class ReceiptRepository implements IReceiptRepository {
  //===============================Get all receipt=========================================
  async getAllReceiptAsync(shop_id: string): Promise<IReceipt[]> {
    const shop = await ShopModel.findByPk(shop_id);
    if (!shop) return null;
    const receipts = await shop.$get('receipts');
    if (!receipts[0]) return null;
    return receipts.map((receipt) => toDomainReceipt(receipt));
  }
  //===============================Get receipt=========================================
  async getReceiptAsync(receipt_id: string): Promise<IReceipt> {
    const receipt = await ReceiptModel.findByPk(receipt_id);
    if (!receipt) return null;
    return toDomainReceipt(receipt);
  }
  //===============================Insert receipt=========================================
  async insertReceiptAsync(
    shop_id: string,
    user_shop_id: string,
    receipt: IReceipt
  ): Promise<IReceipt> {
    const receiptInstance = await ReceiptModel.create({
      receipt_id: uuid.v1(),
      quantity: receipt.quantity,
      productName: receipt.productName,
      price: receipt.price,
      date: receipt.date,
      shopBuyerName: receipt.shopBuyerName,
      shopSellerName: receipt.shopSellerName,
    });
    await ReceiptShop.create({
      shop_id,
      receipt_id: receiptInstance.receipt_id,
    });
    await ReceiptShop.create({
      shop_id: user_shop_id,
      receipt_id: receiptInstance.receipt_id,
    });

    return toDomainReceipt(receiptInstance);
  }
}

export default ReceiptRepository;
