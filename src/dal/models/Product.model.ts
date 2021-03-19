import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import ICategoryModel from './interfaces/ICategory.model';
import IProductModel from './interfaces/IProduct.model';
import CategoryModel from './Category.model';
import ImageModel from './Image.model';

@Table({
  tableName: 'product',
  timestamps: true,
})
class ProductModel extends Model implements IProductModel {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    unique: true,
    allowNull: false,
  })
  product_id: string;

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

  @Column({
    type: DataType.DOUBLE,
    allowNull: false,
  })
  price: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 1,
  })
  quantity: number;

  @ForeignKey(() => ImageModel)
  @Column({
    type: DataType.UUID,
  })
  image_id: string;

  @ForeignKey(() => CategoryModel)
  @Column({ type: DataType.UUID })
  category_id: string;

  @BelongsTo(() => CategoryModel)
  category: ICategoryModel;

  @BelongsTo(() => ImageModel)
  image: ImageModel;
}

export default ProductModel;
