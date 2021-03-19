import { inject, injectable } from 'inversify';
import { SERVICE_TYPES } from '../../../types';

import ITradeService from '../../../services/interfaces/ITrade.service';
import ITradeController from '../intefaces/ITrade.controller';

@injectable()
class TradeController implements ITradeController {
  @inject(SERVICE_TYPES.TradeServiceType) private _tradeService: ITradeService;

  async buyProductAsync(req, res) {
    const { seller_shop_id, buyer_shop_id, product_id, quantity } = req.body;
    const response: any = await this._tradeService.buyProductAsync(
      product_id,
      buyer_shop_id,
      seller_shop_id,
      quantity
    );
    res.json(response).status(response.status);
  }
}

export default TradeController;
