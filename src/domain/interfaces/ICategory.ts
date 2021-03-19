import IImageEntity from './IImage';
import IProduct from './IProduct';

interface ICategory {
  category_id: string;
  products: IProduct[];
  name: string;
  description: string;
  image: IImageEntity;
}

export default ICategory;
