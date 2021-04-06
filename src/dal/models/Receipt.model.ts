import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

import IReceiptModel from './interfaces/IReceipt.model';
import IShopModel from './interfaces/IShop.model';
import ShopModel from './Shop.model';

@Table({
  tableName: 'receipt',
  timestamps: true,
})
class ReceiptModel extends Model implements IReceiptModel {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    unique: true,
    allowNull: false,
  })
  receipt_id: string;

  @Column({
    type: DataType.STRING,
    validate: {
      min: 5,
      max: 20,
    },
    allowNull: false,
  })
  productName: string;

  @Column({
    type: DataType.DOUBLE,
    allowNull: false,
  })
  price: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity: number;

  @Column({
    type: DataType.DATE,
    defaultValue: Date.now(),
    allowNull: false,
  })
  date: number;

  @ForeignKey(() => ShopModel)
  @Column({ type: DataType.UUID, allowNull: false })
  buyer_id: string;

  @ForeignKey(() => ShopModel)
  @Column({ type: DataType.UUID, allowNull: false })
  seller_id: string;

  @BelongsTo(() => ShopModel, 'buyer_id')
  buyer: IShopModel;

  @BelongsTo(() => ShopModel, 'seller_id')
  seller: IShopModel;
}

export default ReceiptModel;
