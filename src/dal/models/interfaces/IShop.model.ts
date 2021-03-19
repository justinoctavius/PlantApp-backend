import ICategoryModel from './ICategory.model';
import IReceiptModel from './IReceipt.model';
interface IShopModel {
  shop_id: string;
  name: string;
  description: string;
  global: boolean;
  money: number;
  categories: ICategoryModel[];
  receipts: IReceiptModel[];
}

export default IShopModel;
