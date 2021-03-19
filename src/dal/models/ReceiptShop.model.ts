import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import ReceiptModel from './Receipt.model';
import ShopModel from './Shop.model';

@Table
class ReceiptShop extends Model {
  @ForeignKey(() => ReceiptModel)
  @Column({
    type: DataType.UUID,
  })
  receipt_id: string;

  @ForeignKey(() => ShopModel)
  @Column({
    type: DataType.UUID,
  })
  shop_id: string;
}

export default ReceiptShop;
