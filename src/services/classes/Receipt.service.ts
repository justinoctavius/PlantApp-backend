import { toReceiptDto } from '../../domain/mappers/Receipt.mapper';
import { injectable, inject } from 'inversify';
import IReceiptRepository from '../../dal/repository/interfaces/IReceipt.repository';
import { REPOSITORY_TYPES } from '../../types';
import IReceiptService from '../interfaces/IReceipt.service';

@injectable()
class ReceiptService implements IReceiptService {
  @inject(REPOSITORY_TYPES.ReceiptRepositoryType)
  private _receiptRepository: IReceiptRepository;

  async getAllReceiptAsync(shop_id: string, page: number): Promise<Object> {
    const receipts = await this._receiptRepository.getAllReceiptAsync(
      shop_id,
      page
    );
    if (!receipts) {
      return { msg: 'There are not receipts', payload: null, status: 404 };
    }
    const receiptsDto = receipts.map((receipt) => toReceiptDto(receipt));
    return { msg: 'success', payload: receiptsDto, status: 200 };
  }
  async getReceiptAsync(receipt_id: string): Promise<Object> {
    const receipt = await this._receiptRepository.getReceiptAsync(receipt_id);
    if (!receipt) {
      return { msg: 'receipt not found', payload: null, status: 404 };
    }
    const receiptDto = toReceiptDto(receipt);
    return { msg: 'success', payload: receiptDto, status: 200 };
  }
}

export default ReceiptService;
