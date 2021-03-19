import { sequelize } from './../../../config/database';
import { injectable, inject } from 'inversify';
import { REPOSITORY_TYPES } from '../../types';

import ICategoryRepository from '../../dal/repository/interfaces/ICategory.repository';
import IProductRepository from '../../dal/repository/interfaces/IProduct.repository';
import IShopRepository from '../../dal/repository/interfaces/IShop.repository';
import ITradeService from '../interfaces/ITrade.service';
import IReceiptRepository from '../../dal/repository/interfaces/IReceipt.repository';

import Category from '../../domain/entities/Category';
import Trade from '../../domain/agregates/Trade';

import { toReceiptDto } from '../../domain/mappers/Receipt.mapper';

@injectable()
class TradeService implements ITradeService {
  @inject(REPOSITORY_TYPES.ShopRepositoryType)
  private _shopRepository: IShopRepository;
  @inject(REPOSITORY_TYPES.ProductRepositoryType)
  private _productRepository: IProductRepository;
  @inject(REPOSITORY_TYPES.CategoryRepositoryType)
  private _categoryRepository: ICategoryRepository;
  @inject(REPOSITORY_TYPES.ReceiptRepositoryType)
  private _receiptRepository: IReceiptRepository;

  async buyProductAsync(
    product_id: string,
    buyer_shop_id: string,
    seller_shop_id: string,
    quantity: number
  ): Promise<Object> {
    const buyerShop = await this._shopRepository.getShopAsync(buyer_shop_id);
    if (!buyerShop) {
      return { msg: "shop doesn't found", payload: null, status: 404 };
    }

    const sellerShop = await this._shopRepository.getShopAsync(seller_shop_id);
    if (!sellerShop) {
      return { msg: "shop doesn't found", payload: null, status: 404 };
    }

    const product = await this._productRepository.getProductAsync(product_id);
    if (!product)
      return { msg: "product doesn't found", payload: null, status: 404 };

    const sellerCategory = await this._categoryRepository.getCategoryAsync(
      product.category_id
    );
    let buyerCategory = await this._categoryRepository.getCategoryByNameAsync(
      buyerShop.shop_id,
      sellerCategory.name
    );

    //verify the buyer money
    if (buyerShop.getMoney() < product.price) {
      return {
        msg: `${buyerShop.name} doesn't have enough money`,
        payload: null,
        status: 500,
      };
    }

    //verify the product quantity
    if (product.getQuantity() < quantity) {
      return {
        msg: `${sellerShop.name} doesn't have enough products`,
        payload: null,
        status: 500,
      };
    }

    //verify the product is comming from another store
    if (product.category_id === buyerCategory.category_id) {
      return {
        msg: `${buyerShop.name} you can't sell products to your self`,
        payload: null,
        status: 500,
      };
    }

    const t = await sequelize.transaction();
    try {
      //verify the buyer category, if not exist is created
      if (!buyerCategory) {
        const newBuyerCategoryInstance = new Category(
          [],
          sellerCategory.name,
          sellerCategory.description,
          sellerCategory.image
        );
        buyerCategory = await this._categoryRepository.insertCategoryAsync(
          buyerShop.shop_id,
          newBuyerCategoryInstance
        );
      }

      //trade
      const trade = new Trade(
        buyerShop,
        buyerCategory,
        sellerShop,
        product,
        quantity
      );
      const receipt = trade.buyProduct();

      //insert the buyer product
      const buyerProductExits = await this._productRepository.getProductByNameAsync(
        buyerCategory.category_id,
        trade._productBoughted.name
      );
      if (buyerProductExits) {
        buyerProductExits.addProduct(trade._productBoughted.getQuantity());
        await this._productRepository.updateProductAsync(buyerProductExits);
      } else {
        await this._productRepository.insertProductAsync(
          trade._productBoughted
        );
      }
      //update or delete the product's amount of product sold
      if (trade._productSold.getQuantity() === 0) {
        await this._productRepository.removeProductAsync(
          trade._productSold.product_id
        );
      } else {
        await this._productRepository.updateProductAsync(trade._productSold);
      }
      //update the buyer money
      await this._shopRepository.updateMoneyAsync(
        trade._shopBuyer.shop_id,
        trade._shopBuyer.getMoney()
      );
      //update the seller money
      await this._shopRepository.updateMoneyAsync(
        trade._shopSeller.shop_id,
        trade._shopSeller.getMoney()
      );
      const receiptSaved = await this._receiptRepository.insertReceiptAsync(
        trade._shopSeller.shop_id,
        trade._shopBuyer.shop_id,
        receipt
      );
      const receiptDto = toReceiptDto(receiptSaved);
      t.commit();
      return { msg: 'success', payload: receiptDto, status: 200 };
    } catch (error) {
      t.rollback();
      return { msg: 'unable to buy product', payload: null, status: 500 };
      console.log(error);
    }
  }
}

export default TradeService;
