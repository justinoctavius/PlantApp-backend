import IShop from '../interfaces/IShop';
import IUser from '../interfaces/IUser';

class User implements IUser {
  public readonly username: string;
  public readonly email: string;
  public readonly shop: IShop;
  public readonly user_id: string;
  public readonly admin: boolean;
  public readonly password: string;

  constructor(
    username: string,
    email: string,
    password: string,
    shop: IShop,
    admin: boolean = false,
    user_id: string = ''
  ) {
    this.username = username;
    this.email = email;
    this.shop = shop;
    this.admin = admin;
    this.user_id = user_id;
    this.password = password;
  }
}

export default User;
