import Receipt from '../entities/Receipt';
import IReceipt from '../interfaces/IReceipt';
import { toDomainShop, toShopDto } from './Shop.mapper';

export const toDomainReceipt = (receipt): IReceipt => {
  const {
    price,
    productName,
    quantity,
    receipt_id,
    date,
    buyer,
    seller,
  } = receipt;
  const buyerDomain = buyer ? toDomainShop(buyer) : null;
  const sellerDomain = seller ? toDomainShop(seller) : null;
  return new Receipt(
    price,
    productName,
    quantity,
    receipt_id,
    date,
    buyerDomain,
    sellerDomain
  );
};

export const toReceiptDto = (receipt: IReceipt): Object => {
  const receiptDto = {
    price: receipt.price,
    date: receipt.date,
    quantity: receipt.quantity,
    receipt_id: receipt.receipt_id,
    productName: receipt.productName,
    buyer: receipt.buyer && toShopDto(receipt.buyer),
    seller: receipt.buyer && toShopDto(receipt.seller),
  };

  return receiptDto;
};
