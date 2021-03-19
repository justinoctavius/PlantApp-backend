import { toDomainImage } from './../../domain/mappers/Image.mapper';
import { toProductDto } from '../../domain/mappers/Product.mapper';
import { injectable, inject } from 'inversify';
import { REPOSITORY_TYPES } from '../../types';
import IProductRepository from '../../dal/repository/interfaces/IProduct.repository';
import IProductService from '../interfaces/IProduct.service';
import Product from '../../domain/entities/Product';
import ImageEntity from '../../domain/entities/Image';

@injectable()
class ProductService implements IProductService {
  @inject(REPOSITORY_TYPES.ProductRepositoryType)
  private _productRepository: IProductRepository;

  //==============================Get all products=================================================
  async getAllProductAsync(category_id: string): Promise<Object> {
    const products = await this._productRepository.getAllProductAsync(
      category_id
    );
    if (!products)
      return { msg: "category doesn't exist", payload: null, status: 404 };

    const productsDto = products.map((product) => toProductDto(product));
    return { msg: 'success', payload: productsDto, status: 200 };
  }
  //==================================Get product=============================================
  async getProductAsync(product_id: string): Promise<Object> {
    const product = await this._productRepository.getProductAsync(product_id);

    if (!product)
      return { msg: "product doesn't exist", payload: null, status: 404 };

    const productDto = toProductDto(product);
    return { msg: 'success', payload: productDto, status: 200 };
  }
  //====================================Insert product===========================================
  async insertProductAsync({
    product_id,
    name,
    description,
    category_id,
    price,
    quantity,
    image_id,
  }): Promise<Object> {
    const image = new ImageEntity('', '', '', image_id);
    const newProduct = new Product(
      product_id,
      name,
      description,
      category_id,
      price,
      image,
      quantity
    );
    console.log(newProduct);
    const productInserted = await this._productRepository.insertProductAsync(
      newProduct
    );

    console.log(productInserted);

    if (!productInserted) {
      return { msg: 'unable to insert product', payload: null, status: 500 };
    }

    const productDto = toProductDto(productInserted);
    return { msg: 'success', payload: productDto, status: 200 };
  }
  //===================================Remove Product============================================
  async removeProductAsync(product_id: string): Promise<Object> {
    const productDeleted = await this._productRepository.removeProductAsync(
      product_id
    );
    if (!productDeleted)
      return { msg: 'unable to remove product', payload: null, status: 500 };

    const productDto = toProductDto(productDeleted);
    return { msg: 'success', payload: productDto, status: 200 };
  }
  //====================================Update Product===========================================
  async updateProductAsync({
    name,
    description,
    category_id,
    price,
    quantity,
    product_id,
    image_id,
  }): Promise<Object> {
    const image = new ImageEntity('', '', '', image_id);
    const product = new Product(
      product_id,
      name,
      description,
      category_id,
      price,
      image,
      quantity
    );
    const productUpdated = await this._productRepository.updateProductAsync(
      product
    );

    if (!productUpdated)
      return { msg: 'unable to update product', payload: null, status: 500 };

    const productDto = toProductDto(productUpdated);
    return { msg: 'success', payload: productDto, status: 200 };
  }
  //===============================================================================
}

export default ProductService;
