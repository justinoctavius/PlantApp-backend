import IImageEntity from './IImage';

interface IProduct {
  name: string;
  product_id: string;
  description: string;
  price: number;
  image: IImageEntity;
  category_id: string;
  getQuantity(): number;
  addProduct(amount: number): void;
  reduceProduct(amount: number): void;
}

export default IProduct;
