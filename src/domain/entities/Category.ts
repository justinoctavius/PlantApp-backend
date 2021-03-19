import ICategory from '../interfaces/ICategory';
import IImageEntity from '../interfaces/IImage';
import IProduct from '../interfaces/IProduct';

class Category implements ICategory {
  public readonly products: IProduct[];
  public readonly name: string;
  public readonly description: string;
  public readonly category_id: string;
  public readonly image: IImageEntity;

  constructor(
    products: IProduct[],
    name: string,
    description: string,
    image: IImageEntity,
    category_id: string = ''
  ) {
    this.products = products;
    this.name = name;
    this.description = description;
    this.category_id = category_id;
    this.image = image;
  }
}

export default Category;
