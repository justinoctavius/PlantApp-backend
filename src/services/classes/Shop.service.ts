import { toShopDto } from '../../domain/mappers/Shop.mapper';
import { injectable, inject } from 'inversify';
import IShopRepository from '../../dal/repository/interfaces/IShop.repository';
import IShop from '../../domain/interfaces/IShop';
import { REPOSITORY_TYPES } from '../../types';
import IShopService from '../interfaces/IShop.service';
import Shop from '../../domain/entities/Shop';

@injectable()
class ShopService implements IShopService {
  @inject(REPOSITORY_TYPES.ShopRepositoryType)
  private _shopRepository: IShopRepository;
  //=============================== Get all shop =========================================
  async getAllShopAsync(offset): Promise<Object> {
    const shops: IShop[] = await this._shopRepository.getAllShopAsync(offset);
    if (!shops) {
      return { msg: 'unable to get shops', payload: null, status: 500 };
    }
    const shopsDto = shops.map((shop) => toShopDto(shop));
    return { msg: 'success', payload: shopsDto, status: 200 };
  }
  //=============================== Get global shop =========================================
  async getGlobalShopAsync(): Promise<Object> {
    const globalShop = await this._shopRepository.getGlobalShopAsync();
    if (!globalShop) {
      return { msg: 'Global shop not found', payload: null, status: 500 };
    }
    const shopDto = toShopDto(globalShop);
    return { msg: 'success', payload: shopDto, status: 200 };
  }
  //=============================== Get shop by id =========================================
  async getShopAsync(shop_id: string): Promise<Object> {
    const shop = await this._shopRepository.getShopAsync(shop_id);
    if (!shop) {
      return { msg: 'Shop not found', payload: null, status: 500 };
    }
    const shopDto = toShopDto(shop);
    return { msg: 'success', payload: shopDto, status: 200 };
  }
  //=============================== Update shop =========================================
  async updateShopAsync({ name, description, shop_id }): Promise<Object> {
    const shop = new Shop([], name, description, false, null, shop_id);
    const shopUpdated = await this._shopRepository.updateShopAsync(shop);
    if (!shopUpdated) {
      return { msg: 'unable to update shop', payload: null, status: 500 };
    }
    const shopDto = toShopDto(shopUpdated);
    return { msg: 'success', payload: shopDto, status: 200 };
  }
}

export default ShopService;
