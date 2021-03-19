import IReceipt from '../../../domain/interfaces/IReceipt';

interface IReceiptRepository {
  getAllReceiptAsync(user_id: string): Promise<IReceipt[]>;
  getReceiptAsync(receipt_id: string): Promise<IReceipt>;
  insertReceiptAsync(
    shop_id: string,
    user_shop_id: string,
    receipt: IReceipt
  ): Promise<IReceipt>;
}

export default IReceiptRepository;
