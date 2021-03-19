import {
  Model,
  DataType,
  Table,
  Column,
  HasOne,
  BeforeSave,
} from 'sequelize-typescript';

import IUserModel from './interfaces/IUser.model';
import ShopModel from './Shop.model';

import { CryptUtil } from '../../utils';

@Table({
  tableName: 'user',
  timestamps: true,
})
class UserModel extends Model implements IUserModel {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    allowNull: false,
    unique: true,
  })
  user_id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  username: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  admin: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  })
  email: string;

  @HasOne(() => ShopModel)
  shop: ShopModel;

  @BeforeSave
  static encryptPassword(user: IUserModel) {
    user.password = CryptUtil.hash(user.password, 15);
  }
}

export default UserModel;
