import IShopModel from './IShop.model';
interface IUserModel {
  user_id: string;
  username: string;
  password: string;
  admin: boolean;
  email: string;
  shop: IShopModel;
}

export default IUserModel;
