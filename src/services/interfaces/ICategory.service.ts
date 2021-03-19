interface ICategoryService {
  getAllCategoryAsync(shop_id: string): Promise<Object>;
  getCategoryAsync(category_id: string): Promise<Object>;
  updateCategoryAsync(category: Object): Promise<Object>;
  removeCategoryAsync(category_id: string): Promise<Object>;
  insertCategoryAsync(shop_id: string, category: Object): Promise<Object>;
}

export default ICategoryService;
