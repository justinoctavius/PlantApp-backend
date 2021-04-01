import { toDomainProduct } from '../../../domain/mappers/Product.mapper';
import { injectable } from 'inversify';

import IProduct from '../../../domain/interfaces/IProduct';
import IProductRepository from '../interfaces/IProduct.repository';

import CategoryModel from '../../models/Category.model';
import ProductModel from '../../models/Product.model';
import * as uuid from 'uuid';
import ImageModel from '../../models/Image.model';

@injectable()
class ProductRepository implements IProductRepository {
  //===============================Get all product=========================================
  async getAllProductAsync(category_id: string): Promise<IProduct[]> {
    const category = await CategoryModel.findByPk(category_id);
    if (!category) return null;
    const products = await category.$get('products', { include: 'image' });
    return products.map((product) => toDomainProduct(product));
  }
  //===============================Get product=========================================
  async getProductAsync(product_id: string): Promise<IProduct> {
    const product = await ProductModel.findByPk(product_id, {
      include: 'image',
    });
    if (!product) return null;
    return toDomainProduct(product);
  }
  //===============================Insert product=========================================
  async insertProductAsync(product: IProduct): Promise<IProduct> {
    const productExist = await this.getProductByNameAsync(
      product.category_id,
      product.name
    );
    if (productExist) return null;

    const image = await ImageModel.findByPk(product.image.image_id);
    if (!image) return null;

    const category = await CategoryModel.findByPk(product.category_id);
    if (!category) return null;

    const productInstance: any = await ProductModel.create({
      product_id: uuid.v1(),
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: product.getQuantity(),
    });

    await image.$add('product', productInstance);
    await category.$add('product', productInstance);

    return toDomainProduct({ ...productInstance.dataValues, image });
  }
  //===============================Remove product=========================================
  async removeProductAsync(product_id: string): Promise<IProduct> {
    const product: any = await ProductModel.findByPk(product_id, {
      include: 'image',
    });
    if (!product) return null;

    await product.destroy();
    return toDomainProduct(product.dataValues);
  }
  //===============================Update product=========================================
  async updateProductAsync(product: IProduct): Promise<IProduct> {
    const productToUpdate: any = await ProductModel.findByPk(
      product.product_id
    );
    if (!productToUpdate) return null;

    const image = await ImageModel.findByPk(product.image.image_id);
    if (!image) return null;

    productToUpdate.name = product.name;
    productToUpdate.description = product.description;
    productToUpdate.quantity = product.getQuantity();
    productToUpdate.price = product.price;
    productToUpdate.$set('image', image);

    await productToUpdate.save();
    return toDomainProduct({ ...productToUpdate.dataValues, image });
  }
  //===============================Get product by name =========================================
  async getProductByNameAsync(
    category_id: string,
    product_name: string
  ): Promise<IProduct> {
    const category = await CategoryModel.findByPk(category_id);
    console.log(category_id);
    const product = await category.$get('products', {
      where: { name: product_name },
      include: 'image',
    });

    if (!product[0]) return null;

    return toDomainProduct(product[0]);
  }
}

export default ProductRepository;
