interface ITradeService {
  buyProductAsync(
    product_id: string,
    user_id: string,
    shop_id: string,
    quantity: number
  ): Promise<Object>;
}

export default ITradeService;
