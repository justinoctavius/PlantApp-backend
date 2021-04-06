import IShopModel from './IShop.model';

interface IReceiptModel {
  receipt_id: string;
  productName: string;
  price: number;
  quantity: number;
  date: number;
  buyer_id: string;
  seller_id: string;
  buyer: IShopModel;
  seller: IShopModel;
}

export default IReceiptModel;
