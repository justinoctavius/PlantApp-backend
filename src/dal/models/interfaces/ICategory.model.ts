import IProductModel from './IProduct.model';

interface ICategoryModel {
  category_id: string;
  name: string;
  description: string;
  shop_id: string;
  image_id: string;
  products: IProductModel[];
}

export default ICategoryModel;
