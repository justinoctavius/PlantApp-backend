import ICategory from '../interfaces/ICategory';
import IProduct from '../interfaces/IProduct';
import IReceipt from '../interfaces/IReceipt';
import IShop from '../interfaces/IShop';
import IUser from '../interfaces/IUser';
import Product from '../entities/Product';
import Receipt from '../entities/Receipt';

class Trade {
  public readonly _shopBuyer: IShop;
  public readonly _shopSeller: IShop;
  public readonly _productSold: IProduct;
  public readonly _buyerCategory: ICategory;
  public readonly _quantity: number;
  public _productBoughted: IProduct;
  constructor(
    shop_buyer: IShop,
    buyer_category: ICategory,
    shop_seller: IShop,
    productToSell: IProduct,
    quantity: number
  ) {
    this._shopSeller = shop_seller;
    this._shopBuyer = shop_buyer;
    this._productSold = productToSell;
    this._buyerCategory = buyer_category;
    this._quantity = quantity;
  }

  buyProduct(): IReceipt {
    const _getProductPrice = () => {
      const productBonus =
        this._productSold.price * 0.05 - this._productSold.getQuantity() * 0.05;
      if (productBonus > 0) {
        return Number((this._productSold.price + productBonus).toFixed(2));
      }
      return Number(this._productSold.price.toFixed(2));
    };
    const price = Number((this._productSold.price * this._quantity).toFixed(2));

    this._productBoughted = new Product(
      '',
      this._productSold.name,
      this._productSold.description,
      this._buyerCategory.category_id,
      _getProductPrice(),
      this._productSold.image,
      this._quantity
    );
    this._shopSeller.addMoney(price);
    this._productSold.reduceProduct(this._quantity);
    this._productSold.price = _getProductPrice();
    this._shopBuyer.reduceMoney(price);

    return new Receipt(price, this._productSold.name, this._quantity);
  }
}

export default Trade;
