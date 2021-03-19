import { toDomainImage, toImageDto } from './Image.mapper';
import Product from '../entities/Product';
import IProduct from '../interfaces/IProduct';

export const toDomainProduct = (product): IProduct => {
  const {
    product_id,
    name,
    description,
    category_id,
    price,
    image,
    quantity,
  } = product;
  const domainImage = toDomainImage(image);
  return new Product(
    product_id,
    name,
    description,
    category_id,
    price,
    domainImage,
    quantity
  );
};
export const toProductDto = (product: IProduct): Object => {
  const productDto = {
    product_id: product.product_id,
    name: product.name,
    description: product.description,
    price: product.price,
    image: toImageDto(product.image),
    quantity: product.getQuantity(),
  };

  return productDto;
};
