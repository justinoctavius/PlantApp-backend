import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';

import ICategoryModel from './interfaces/ICategory.model';
import IShopModel from './interfaces/IShop.model';
import IUserModel from './interfaces/IUser.model';
import IReceiptModel from './interfaces/IReceipt.model';

import CategoryModel from './Category.model';
import ReceiptModel from './Receipt.model';
import UserModel from './User.model';

@Table({
  tableName: 'shop',
  timestamps: true,
})
class ShopModel extends Model implements IShopModel {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    unique: true,
    allowNull: false,
  })
  shop_id: string;

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
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  global: boolean;

  @Column({
    type: DataType.DOUBLE,
    allowNull: false,
    defaultValue: 1000,
  })
  money: number;

  @ForeignKey(() => UserModel)
  @Column({ type: DataType.UUID })
  user_id: string;

  @BelongsTo(() => UserModel)
  user: IUserModel;

  @HasMany(() => ReceiptModel)
  receipts: IReceiptModel[];

  @HasMany(() => CategoryModel)
  categories: ICategoryModel[];
}

export default ShopModel;
