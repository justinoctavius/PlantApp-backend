import IProduct from '../../../domain/interfaces/IProduct';

interface IProductRepository {
  getAllProductAsync(category_id: string): Promise<IProduct[]>;
  getProductAsync(product_id: string): Promise<IProduct>;
  updateProductAsync(product: IProduct): Promise<IProduct>;
  removeProductAsync(product_id: string): Promise<IProduct>;
  insertProductAsync(product: IProduct): Promise<IProduct>;
  getProductByNameAsync(
    category_id: string,
    product_name: string
  ): Promise<IProduct>;
}

export default IProductRepository;
