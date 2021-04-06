import IReceipt from '../interfaces/IReceipt';
import IShop from '../interfaces/IShop';

class Receipt implements IReceipt {
  public readonly productName: string;
  public readonly quantity: number;
  public readonly price: number;
  public readonly date: number;
  public readonly receipt_id: string;
  public readonly buyer: IShop;
  public readonly seller: IShop;

  constructor(
    price: number,
    productName: string,
    quantity: number,
    receipt_id: string = '',
    date: number = Date.now(),
    buyer: IShop = null,
    seller: IShop = null
  ) {
    this.price = price;
    this.productName = productName;
    this.quantity = quantity;
    this.date = date;
    this.receipt_id = receipt_id;
    this.buyer = buyer;
    this.seller = seller;
  }
}

export default Receipt;
