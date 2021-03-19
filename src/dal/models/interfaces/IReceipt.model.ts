import IShopModel from './IShop.model';

interface IReceiptModel {
  receipt_id: string;
  productName: string;
  shops: IShopModel[];
  price: number;
  quantity: number;
  date: number;
}

export default IReceiptModel;
