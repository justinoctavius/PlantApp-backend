import { Sequelize } from 'sequelize-typescript';
import { Op } from 'sequelize';
import { toDomainReceipt } from '../../../domain/mappers/Receipt.mapper';
import { injectable } from 'inversify';

import IReceipt from '../../../domain/interfaces/IReceipt';
import IReceiptRepository from '../interfaces/IReceipt.repository';

import ReceiptModel from '../../models/Receipt.model';

import * as uuid from 'uuid';

@injectable()
class ReceiptRepository implements IReceiptRepository {
  //===============================Get all receipt=========================================
  async getAllReceiptAsync(shop_id: string, page: number): Promise<IReceipt[]> {
    const receipts = await ReceiptModel.findAll({
      where: { [Op.or]: [{ buyer_id: shop_id }, { seller_id: shop_id }] },
      include: ['buyer', 'seller'],
      limit: 20,
      offset: page * 20,
    });
    if (!receipts[0]) return null;
    return receipts.map((receipt) => toDomainReceipt(receipt));
  }
  //===============================Get receipt=========================================
  async getReceiptAsync(receipt_id: string): Promise<IReceipt> {
    const receipt = await ReceiptModel.findByPk(receipt_id, {
      include: ['seller', 'buyer'],
    });
    if (!receipt) return null;
    return toDomainReceipt(receipt);
  }
  //===============================Insert receipt=========================================
  async insertReceiptAsync(
    seller_id: string,
    buyer_id: string,
    receipt: IReceipt
  ): Promise<IReceipt> {
    const receiptInstance = await ReceiptModel.create({
      receipt_id: uuid.v1(),
      quantity: receipt.quantity,
      productName: receipt.productName,
      price: receipt.price,
      date: receipt.date,
      buyer_id,
      seller_id,
    });

    return toDomainReceipt(receiptInstance);
  }
}

export default ReceiptRepository;
