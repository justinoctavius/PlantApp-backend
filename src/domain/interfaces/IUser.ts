import IShop from './IShop';

interface IUser {
  username: string;
  shop: IShop;
  email: string;
  user_id: string;
  admin: boolean;
  password: string;
}

export default IUser;
