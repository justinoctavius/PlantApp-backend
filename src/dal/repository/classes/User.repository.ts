import { injectable } from 'inversify';
import { toDomainUser } from '../../../domain/mappers/User.mapper';
import { Op } from 'sequelize';
import * as uuid from 'uuid';
import { CryptUtil } from '../../../utils';

import UserModel from '../../models/User.model';

import IUserRepository from '../interfaces/IUser.repository';
import IUser from '../../../domain/interfaces/IUser';

@injectable()
class UserRepository implements IUserRepository {
  //===============================Get user by id=========================================
  async getUserByIdAsync(user_id: string): Promise<IUser> {
    const user = await UserModel.findByPk(user_id, { include: 'shop' });
    if (!user) return null;
    return toDomainUser(user);
  }
  //===============================Sign in=========================================
  async signInAsync({ username, email, password }: IUser): Promise<IUser> {
    const user = await this.getUserByAttributeAsync({
      username,
      email,
      include: { shop: 'shop', categories: 'categories' },
    });
    if (!user) return null;
    if (!CryptUtil.compare(password, user.password)) return null;
    return toDomainUser(user);
  }
  //===============================Sign up=========================================
  async signUpAsync(user: IUser): Promise<IUser> {
    const userExists = await this.getUserByAttributeAsync({
      username: user.username,
      email: user.email,
    });
    if (userExists) return null;

    const newUser: any = await UserModel.create({
      user_id: uuid.v1(),
      username: user.username,
      email: user.email,
      password: user.password,
      admin: user.admin,
    });

    const newShop = await newUser.$create('shop', {
      receipts: [],
      categories: [],
      name: user.shop.name,
      description: user.shop.description,
      money: user.shop.getMoney(),
      global: user.shop.global,
      shop_id: uuid.v1(),
    });

    return toDomainUser({ ...newUser, shop: newShop });
  }
  //===============================Get user by attribute=========================================
  async getUserByAttributeAsync({
    username,
    email,
    include = null,
  }): Promise<IUser> {
    const user: any = await UserModel.findOne({
      where: { [Op.or]: [{ username }, { email }] },
    });

    if (!user) return null;

    let shop = null;
    if (include) {
      if (include.shop) shop = await user.$get(include.shop);
      if (shop && include.categories) {
        shop.categories = await shop.$get(include.categories);
      }
    }

    return toDomainUser({ ...user.dataValues, shop });
  }
}

export default UserRepository;
