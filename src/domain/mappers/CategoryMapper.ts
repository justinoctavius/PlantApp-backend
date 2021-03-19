import Category from '../entities/Category';
import ICategory from '../interfaces/ICategory';
import { toDomainImage, toImageDto } from './Image.mapper';
import { toProductDto, toDomainProduct } from './Product.mapper';

export const toDomainCategory = (category): ICategory => {
  const { products, name, category_id, description, image } = category;
  const domainProducts = products?.map((product) => toDomainProduct(product));
  const domainImage = toDomainImage(image);
  return new Category(
    domainProducts,
    name,
    description,
    domainImage,
    category_id
  );
};

export const toCategoryDto = (category: ICategory): Object => {
  const categoryDto = {
    products: category.products?.map((product) => toProductDto(product)),
    name: category.name,
    category_id: category.category_id,
    description: category.description,
    image: toImageDto(category.image),
  };

  return categoryDto;
};
