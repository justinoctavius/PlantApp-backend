interface IProductService {
  getAllProductAsync(user_id: string): Promise<Object>;
  getProductAsync(product_id: string): Promise<Object>;
  updateProductAsync(product: Object): Promise<Object>;
  removeProductAsync(product_id: string): Promise<Object>;
  insertProductAsync(product: Object): Promise<Object>;
}

export default IProductService;
