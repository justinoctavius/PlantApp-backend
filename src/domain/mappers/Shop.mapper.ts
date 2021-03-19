import { Shop } from '../entities';
import ICategory from '../interfaces/ICategory';
import IShop from '../interfaces/IShop';
import { toCategoryDto, toDomainCategory } from './CategoryMapper';

export const toDomainShop = (shop): IShop => {
  const { categories, money, global, shop_id, name, description } = shop;
  const domainCategories = categories?.map((category) =>
    toDomainCategory(category)
  );
  return new Shop(domainCategories, name, description, global, money, shop_id);
};

export const toShopDto = (shop: IShop): Object => {
  const shopDto = {
    categories: shop.categories?.map((category: ICategory) =>
      toCategoryDto(category)
    ),
    money: shop.getMoney(),
    shop_id: shop.shop_id,
    global: shop.global,
    name: shop.name,
    description: shop.description,
  };

  return shopDto;
};
