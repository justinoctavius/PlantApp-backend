import { injectable, inject } from 'inversify';
import { REPOSITORY_TYPES } from '../../types';
import { toCategoryDto } from './../../domain/mappers/CategoryMapper';

import Category from '../../domain/entities/Category';

import ImageEntity from '../../domain/entities/Image';
import ICategory from '../../domain/interfaces/ICategory';
import ICategoryService from '../interfaces/ICategory.service';
import ICategoryRepository from '../../dal/repository/interfaces/ICategory.repository';

@injectable()
class CategoryService implements ICategoryService {
  @inject(REPOSITORY_TYPES.CategoryRepositoryType)
  private _categoryRepository: ICategoryRepository;
  //===============================Get All Categories =========================================
  async getAllCategoryAsync(shop_id: string): Promise<Object> {
    const categories: ICategory[] = await this._categoryRepository.getAllCategoryAsync(
      shop_id
    );
    if (!categories)
      return { msg: "category doesn't exist", payload: null, status: 404 };
    const categoriesDto = categories.map((category) => toCategoryDto(category));
    return { msg: 'success', payload: categoriesDto };
  }
  //===============================Insert category =========================================
  async insertCategoryAsync(
    shop_id,
    { name, description, image_id }
  ): Promise<Object> {
    const image = new ImageEntity('', '', '', image_id);
    const category: ICategory = new Category([], name, description, image);
    const categoryInserted: ICategory = await this._categoryRepository.insertCategoryAsync(
      shop_id,
      category
    );

    if (!categoryInserted)
      return { msg: 'unable to insert category', payload: null, status: 404 };

    const categoryDto = toCategoryDto(categoryInserted);
    return { msg: 'success', payload: categoryDto, status: 200 };
  }
  //===============================get category by id =========================================
  async getCategoryAsync(category_id: string): Promise<Object> {
    const category: ICategory = await this._categoryRepository.getCategoryAsync(
      category_id
    );
    if (!category)
      return { msg: "category doesn't exist", payload: null, status: 404 };

    const categoryDto = toCategoryDto(category);
    return { msg: 'success', payload: categoryDto, status: 200 };
  }
  //===============================remove category =========================================
  async removeCategoryAsync(category_id: string): Promise<Object> {
    const categoryDeleted: ICategory = await this._categoryRepository.removeCategoryAsync(
      category_id
    );
    if (!categoryDeleted)
      return {
        msg: 'unable to delete category',
        payload: categoryDeleted,
        status: 500,
      };

    const categoryDeletedDto = toCategoryDto(categoryDeleted);

    return { msg: 'success', payload: categoryDeletedDto, status: 200 };
  }
  //===============================Update Category =========================================
  async updateCategoryAsync({
    category_id,
    name,
    description,
    image_id,
  }): Promise<Object> {
    const image = new ImageEntity('', '', '', image_id);
    const category = new Category([], name, description, image, category_id);
    const categoryUpdated: ICategory = await this._categoryRepository.updateCategoryAsync(
      category
    );

    if (!categoryUpdated) {
      return {
        msg: 'unable to update the category',
        payload: null,
        status: 500,
      };
    }

    const categoryDto = toCategoryDto(categoryUpdated);
    return { msg: 'success', payload: categoryDto, status: 200 };
  }
}

export default CategoryService;
