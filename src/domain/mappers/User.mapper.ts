import { toShopDto, toDomainShop } from './Shop.mapper';
import { User } from '../entities';
import IUser from '../interfaces/IUser';

export const toDomainUser = (user): IUser => {
  const { username, email, shop, user_id, admin, password } = user;
  const domainShop = shop ? toDomainShop(shop) : null;
  return new User(username, email, password, domainShop, admin, user_id);
};
export const toUserDTO = (user: IUser): Object => {
  const UserDto = {
    username: user.username,
    email: user.email,
    shop: user.shop ? toShopDto(user.shop) : null,
    user_id: user.user_id,
    admin: user.admin,
  };

  return UserDto;
};
