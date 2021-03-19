import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import ImageModel from './Image.model';
import ICategoryModel from './interfaces/ICategory.model';
import IImageModel from './interfaces/IImage.model';
import IProductModel from './interfaces/IProduct.model';
import IShopModel from './interfaces/IShop.model';
import ProductModel from './Product.model';
import ShopModel from './Shop.model';

@Table({
  tableName: 'category',
  timestamps: true,
})
class CategoryModel extends Model implements ICategoryModel {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    unique: true,
    allowNull: false,
  })
  category_id: string;

  @Column({
    type: DataType.STRING,
    validate: {
      min: 5,
      max: 20,
    },
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.TEXT,
  })
  description: string;

  @ForeignKey(() => ShopModel)
  @Column({ type: DataType.UUID })
  shop_id: string;

  @ForeignKey(() => ImageModel)
  @Column({ type: DataType.UUID })
  image_id: string;

  @BelongsTo(() => ShopModel)
  shop: IShopModel;

  @BelongsTo(() => ImageModel)
  image: IImageModel;

  @HasMany(() => ProductModel)
  products: IProductModel[];
}

export default CategoryModel;
