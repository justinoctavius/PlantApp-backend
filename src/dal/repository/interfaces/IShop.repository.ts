import IShop from '../../../domain/interfaces/IShop';

interface IShopRepository {
  getAllShopAsync(offset: string): Promise<IShop[]>;
  getGlobalShopAsync(): Promise<IShop>;
  getShopAsync(shop_id: string): Promise<IShop>;
  updateShopAsync(shop: IShop): Promise<IShop>;
  updateMoneyAsync(shop_id: string, money: number): Promise<IShop>;
}

export default IShopRepository;
