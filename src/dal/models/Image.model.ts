import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import CategoryModel from './Category.model';
import ICategoryModel from './interfaces/ICategory.model';
import IImageModel from './interfaces/IImage.model';
import IProductModel from './interfaces/IProduct.model';
import ProductModel from './Product.model';

@Table({
  tableName: 'image',
  timestamps: true,
})
class ImageModel extends Model implements IImageModel {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    unique: true,
    allowNull: false,
  })
  image_id: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.TEXT,
  })
  description: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  image_url: string;

  @HasMany(() => ProductModel)
  products: IProductModel[];

  @HasMany(() => CategoryModel)
  categories: ICategoryModel[];
}

export default ImageModel;
