import { injectable, inject } from 'inversify';
import { SERVICE_TYPES } from '../../../types';

import IReceiptService from '../../../services/interfaces/IReceipt.service';
import IReceiptController from '../intefaces/IReceipt.controller';

@injectable()
class ReceiptController implements IReceiptController {
  @inject(SERVICE_TYPES.ReceiptServiceType)
  private _receiptService: IReceiptService;
  //===============================Get all receipt===============================================
  async getAllReceiptAsync(req, res): Promise<void> {
    const { shop_id } = req.params;
    const response: any = await this._receiptService.getAllReceiptAsync(
      shop_id
    );
    res.json(response).status(response.status);
  }
  //===============================Get receipt===============================================
  async getReceiptAsync(req, res): Promise<void> {
    const { receipt_id } = req.params;
    const response: any = await this._receiptService.getReceiptAsync(
      receipt_id
    );
    res.json(response).status(response.status);
  }
}

export default ReceiptController;
