import ICategory from '../../../domain/interfaces/ICategory';

interface ICategoryRepository {
  getAllCategoryAsync(user_id: string): Promise<ICategory[]>;
  getCategoryAsync(category_id: string): Promise<ICategory>;
  updateCategoryAsync(category: ICategory): Promise<ICategory>;
  removeCategoryAsync(category_id: string): Promise<ICategory>;
  insertCategoryAsync(shop_id: string, category: ICategory): Promise<ICategory>;
  getCategoryByNameAsync(shop_id: string, name: string): Promise<ICategory>;
}

export default ICategoryRepository;
