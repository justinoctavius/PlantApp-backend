import { injectable, inject } from 'inversify';
import { SERVICE_TYPES } from '../../../types';

import IShopService from '../../../services/interfaces/IShop.service';
import IShopController from '../intefaces/IShop.controller';

@injectable()
class ShopController implements IShopController {
  @inject(SERVICE_TYPES.ShopServiceType) private _shopService: IShopService;
  //===============================Get all shop===============================================
  async getAllShopAsync(req, res) {
    const { page } = req.query;
    const response: any = await this._shopService.getAllShopAsync(page);
    res.json(response).status(response.status);
  }
  //===============================Get global shop===============================================
  async getGlobalShopAsync(req, res) {
    const response: any = await this._shopService.getGlobalShopAsync();
    res.json(response).status(response.status);
  }
  //===============================Get shop===============================================
  async getShopAsync(req, res) {
    const { shop_id } = req.params;
    const response: any = await this._shopService.getShopAsync(shop_id);
    res.json(response).status(response.status);
  }
  //===============================update shop===============================================
  async updateShopAsync(req, res) {
    const { shop_id } = req.params;
    const { name, description } = req.body;
    const response: any = await this._shopService.updateShopAsync({
      shop_id,
      name,
      description,
    });
    res.json(response).status(response.status);
  }
}

export default ShopController;
