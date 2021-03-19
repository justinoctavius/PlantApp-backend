interface IShopService {
  getAllShopAsync(offset): Promise<Object>;
  getGlobalShopAsync(): Promise<Object>;
  getShopAsync(shop_id: string): Promise<Object>;
  updateShopAsync(shop: Object): Promise<Object>;
}

export default IShopService;
