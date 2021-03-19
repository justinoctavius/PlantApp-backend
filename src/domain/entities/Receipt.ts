import IReceipt from '../interfaces/IReceipt';

class Receipt implements IReceipt {
  public readonly shopBuyerName: string;
  public readonly shopSellerName: string;
  public readonly productName: string;
  public readonly quantity: number;
  public readonly price: number;
  public readonly date: number;
  public readonly receipt_id: string;

  constructor(
    shopBuyerName: string,
    price: number,
    productName: string,
    quantity: number,
    shopSellerName: string,
    receipt_id: string = ''
  ) {
    this.shopBuyerName = shopBuyerName;
    this.price = price;
    this.productName = productName;
    this.quantity = quantity;
    this.date = Date.now();
    this.shopSellerName = shopSellerName;
    this.receipt_id = receipt_id;
  }
}

export default Receipt;
