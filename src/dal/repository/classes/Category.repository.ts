import { injectable } from 'inversify';
import * as uuid from 'uuid';

import { toDomainCategory } from './../../../domain/mappers/CategoryMapper';

import CategoryModel from '../../models/Category.model';
import ShopModel from '../../models/Shop.model';

import ICategoryRepository from '../interfaces/ICategory.repository';
import ICategory from '../../../domain/interfaces/ICategory';
import ImageModel from '../../models/Image.model';

@injectable()
class CategoryRepository implements ICategoryRepository {
  //===============================Get all category=========================================
  async getAllCategoryAsync(shop_id: string): Promise<ICategory[]> {
    const shop = await ShopModel.findByPk(shop_id, {
      include: [
        {
          model: CategoryModel,
          as: 'categories',
          include: [
            {
              model: ImageModel,
              as: 'image',
            },
          ],
        },
      ],
    });
    if (!shop) return null;

    return shop.categories.map((category) => toDomainCategory(category));
  }
  //===============================get category=========================================
  async getCategoryAsync(category_id: string): Promise<ICategory> {
    const category = await CategoryModel.findByPk(category_id, {
      include: 'image',
    });
    if (!category) return null;
    return toDomainCategory(category);
  }
  //===============================insert category=========================================
  async insertCategoryAsync(
    shop_id: string,
    category: ICategory
  ): Promise<ICategory> {
    const categoryExist = await this.getCategoryByNameAsync(
      shop_id,
      category.name
    );
    if (categoryExist) return null;

    const shop = await ShopModel.findByPk(shop_id);
    if (!shop) return null;

    const image = await ImageModel.findByPk(category.image.image_id);
    if (!image) return null;

    const categoryInstance: any = await CategoryModel.create({
      category_id: uuid.v1(),
      products: category.products,
      name: category.name,
      description: category.description,
    });
    console.log(categoryInstance);
    await image.$add('category', categoryInstance);
    await shop.$add('category', categoryInstance);

    return toDomainCategory({ ...categoryInstance.dataValue, image });
  }
  //===============================remove category=========================================
  async removeCategoryAsync(category_id: string): Promise<ICategory> {
    const category = await CategoryModel.findByPk(category_id, {
      include: 'image',
    });
    if (!category) return null;
    await category.destroy();
    return toDomainCategory(category);
  }
  //===============================update category=========================================
  async updateCategoryAsync(category: ICategory): Promise<ICategory> {
    const categoryToUpdate = await CategoryModel.findByPk(
      category.category_id,
      { include: 'image' }
    );
    if (!categoryToUpdate) return null;

    const image = await ImageModel.findByPk(category.image.image_id);
    if (!image) return null;

    categoryToUpdate.name = category.name;
    categoryToUpdate.description = category.description;
    categoryToUpdate.$set('image', image);
    await categoryToUpdate.save();

    return toDomainCategory(categoryToUpdate);
  }
  //===============================Get category by name=========================================
  async getCategoryByNameAsync(shop_id, category_name): Promise<ICategory> {
    const shop = await ShopModel.findByPk(shop_id);
    const category: any = await shop.$get('categories', {
      where: { name: category_name },
      include: 'image',
    });
    if (!category[0]) return null;

    return toDomainCategory(category[0]);
  }
}

export default CategoryRepository;
