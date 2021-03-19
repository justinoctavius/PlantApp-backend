import Receipt from '../entities/Receipt';
import IReceipt from '../interfaces/IReceipt';

export const toDomainReceipt = (receipt): IReceipt => {
  const {
    shopBuyerName,
    price,
    productName,
    quantity,
    shopSellerName,
    receipt_id,
  } = receipt;
  return new Receipt(
    shopBuyerName,
    price,
    productName,
    quantity,
    shopSellerName,
    receipt_id
  );
};

export const toReceiptDto = (receipt: IReceipt): Object => {
  const receiptDto = {
    buyerName: receipt.shopBuyerName,
    price: receipt.price,
    quantity: receipt.quantity,
    sellerName: receipt.shopSellerName,
    receipt_id: receipt.receipt_id,
    productName: receipt.productName,
  };

  return receiptDto;
};
