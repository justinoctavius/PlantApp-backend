import { injectable, inject } from 'inversify';
import { SERVICE_TYPES } from '../../../types';

import IProductService from '../../../services/interfaces/IProduct.service';
import IProductController from '../intefaces/IProduct.controller';

@injectable()
class ProductController implements IProductController {
  @inject(SERVICE_TYPES.ProductServiceType)
  private _productService: IProductService;
  //=============================== Get all product =========================================
  async getAllProductAsync(req, res): Promise<void> {
    const { category_id } = req.params;
    const response = await this._productService.getAllProductAsync(category_id);
    res.json(response).status(200);
  }
  //=============================== Get product by id =========================================
  async getProductAsync(req, res): Promise<void> {
    const { product_id } = req.params;
    const response = await this._productService.getProductAsync(product_id);
    res.json(response).status(200);
  }
  //=============================== Insert product =========================================
  async insertProductAsync(req, res): Promise<void> {
    const {
      category_id,
      name,
      price,
      description,
      quantity,
      image_id,
      id,
    } = req.body;
    console.log(req.body);
    const response = await this._productService.insertProductAsync({
      image_id,
      category_id,
      name,
      description,
      price,
      id,
      quantity,
    });
    res.json(response).status(200);
  }
  //=============================== Update product =========================================
  async updateProductAsync(req, res): Promise<void> {
    const { product_id } = req.params;
    const { name, price, description, quantity, image_id } = req.body;
    const response = await this._productService.updateProductAsync({
      image_id,
      product_id,
      name,
      price,
      description,
      quantity,
    });
    res.json(response).status(200);
  }
  //=============================== Remove product =========================================
  async removeProductAsync(req, res): Promise<void> {
    const { product_id } = req.params;
    const response = await this._productService.removeProductAsync(product_id);
    res.json(response).status(200);
  }
}

export default ProductController;
