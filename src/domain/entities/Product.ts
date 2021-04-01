import IImageEntity from '../interfaces/IImage';
import IProduct from '../interfaces/IProduct';

class Product implements IProduct {
  public readonly product_id: string;
  public readonly price: number;
  private quantity: number;
  public readonly name: string;
  public readonly description: string;
  public readonly category_id: string;
  public readonly image: IImageEntity;

  constructor(
    product_id: string,
    name: string,
    description: string,
    category_id: string,
    price: number,
    image: IImageEntity,
    quantity: number
  ) {
    this.product_id = product_id;
    this.name = name;
    this.description = description;
    this.category_id = category_id;
    this.price = price;
    this.image = image;
    this.quantity = quantity;
  }

  getQuantity(): number {
    return this.quantity;
  }

  addProduct(quantity: number): void {
    this.quantity = Number(this.quantity) + Number(quantity);
  }

  reduceProduct(quantity: number): void {
    this.quantity = this.quantity - quantity;
  }
}

export default Product;
