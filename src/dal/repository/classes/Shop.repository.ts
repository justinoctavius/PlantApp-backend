import { toDomainShop } from '../../../domain/mappers/Shop.mapper';
import { injectable } from 'inversify';

import IShop from '../../../domain/interfaces/IShop';
import ShopModel from '../../models/Shop.model';
import IShopRepository from '../interfaces/IShop.repository';

@injectable()
class ShopRepository implements IShopRepository {
  //=============================== Get all shop =========================================
  async getAllShopAsync(offset): Promise<IShop[]> {
    const shops = await ShopModel.findAll({ limit: 20, offset: offset * 20 });
    return shops.map((shop) => toDomainShop(shop));
  }
  //=============================== Get global shop =========================================
  async getGlobalShopAsync(): Promise<IShop> {
    const globalShop = await ShopModel.findOne({ where: { global: true } });
    if (!globalShop) return null;
    return toDomainShop(globalShop);
  }
  //=============================== Get shop by id =========================================
  async getShopAsync(shop_id: string): Promise<IShop> {
    const shop = await ShopModel.findByPk(shop_id);
    if (!shop) return null;
    return toDomainShop(shop);
  }
  //=============================== Update shop =========================================
  async updateShopAsync(shop: IShop): Promise<IShop> {
    const shopToUpdate = await ShopModel.findByPk(shop.shop_id);
    if (!shopToUpdate) return null;

    shopToUpdate.name = shop.name;
    shopToUpdate.description = shop.description;

    await shopToUpdate.save();
    return toDomainShop(shopToUpdate);
  }
  //=============================== update money =========================================
  async updateMoneyAsync(shop_id: string, money: number): Promise<IShop> {
    const shop = await ShopModel.findByPk(shop_id);
    if (!shop) return null;
    shop.money = money;
    await shop.save();
    return toDomainShop(shop);
  }
}

export default ShopRepository;
