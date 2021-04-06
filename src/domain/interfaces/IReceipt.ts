import IShop from './IShop';

interface IReceipt {
  productName: string;
  quantity: number;
  price: number;
  date: number;
  receipt_id: string;
  buyer: IShop;
  seller: IShop;
}

export default IReceipt;
