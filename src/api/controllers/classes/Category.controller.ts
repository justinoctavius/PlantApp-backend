import { injectable, inject } from 'inversify';
import { SERVICE_TYPES } from '../../../types';

import ICategoryService from '../../../services/interfaces/ICategory.service';
import ICategoryController from '../intefaces/ICategory.controller';

@injectable()
class CategoryController implements ICategoryController {
  @inject(SERVICE_TYPES.CategoryServiceType)
  private _categoryService: ICategoryService;
  //===============================Get All categories =========================================
  async getAllCategoryAsync(req, res) {
    const { shop_id } = req.params;
    const response: any = await this._categoryService.getAllCategoryAsync(
      shop_id
    );
    res.json(response).status(response.status);
  }
  //=============================== Get category =========================================
  async getCategoryAsync(req, res) {
    const { category_id } = req.params;
    const response: any = await this._categoryService.getCategoryAsync(
      category_id
    );
    res.json(response).status(response.status);
  }
  //=============================== Insert category =========================================
  async insertCategoryAsync(req, res) {
    const { shop_id, name, description, image_id } = req.body;
    const response: any = await this._categoryService.insertCategoryAsync(
      shop_id,
      {
        image_id,
        name,
        description,
      }
    );
    res.json(response).status(response.status);
  }
  //=============================== Update category =========================================
  async updateCategoryAsync(req, res) {
    const { category_id } = req.params;
    const { name, description, image_id } = req.body;
    const response: any = await this._categoryService.updateCategoryAsync({
      image_id,
      category_id,
      name,
      description,
    });
    res.json(response).status(response.status);
  }
  //=============================== Remove Category =========================================
  async removeCategoryAsync(req, res) {
    const { category_id } = req.params;
    const response: any = await this._categoryService.removeCategoryAsync(
      category_id
    );
    res.json(response).status(response.status);
  }
}

export default CategoryController;
