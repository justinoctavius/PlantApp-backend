import { injectable, inject } from 'inversify';
import { toUserDTO } from '../../domain/mappers/User.mapper';
import IUserRepository from '../../dal/repository/interfaces/IUser.repository';
import Shop from '../../domain/entities/Shop';
import User from '../../domain/entities/User';
import IUserService from '../interfaces/IUser.service';
import IShop from '../../domain/interfaces/IShop';
import IUser from '../../domain/interfaces/IUser';
import { REPOSITORY_TYPES } from '../../types';
import { JWTUtil } from '../../utils';

@injectable()
class UserService implements IUserService {
  @inject(REPOSITORY_TYPES.UserRepositoryType)
  private _userRepository: IUserRepository;
  //===============================Get user by name =========================================
  async getUserAsync(user_id: string): Promise<Object> {
    try {
      const user: IUser = await this._userRepository.getUserByIdAsync(user_id);
      const userDto = toUserDTO(user);
      return { msg: 'success', payload: userDto, status: 200 };
    } catch (error) {
      return { msg: 'unable to get user', payload: null, status: 500 };
    }
  }
  //===============================Sign In =========================================
  async signInAsync({ username, email, password }): Promise<Object> {
    try {
      const user: IUser = new User(username, email, password, null);
      const userSignedIn: IUser = await this._userRepository.signInAsync(user);

      if (!userSignedIn) {
        return {
          msg: 'username, email or password incorrect',
          payload: null,
          status: 500,
        };
      }

      const userDTO = toUserDTO(userSignedIn);
      const token = JWTUtil.sign(userSignedIn.user_id);

      return {
        msg: 'success',
        payload: { user: userDTO, token },
        status: 200,
      };
    } catch (error) {
      console.log(error);
      return {
        msg: 'unable to sign in',
        payload: null,
        status: 500,
      };
    }
  }
  //===============================Sign up =========================================
  async signUpAsync({ username, email, password }): Promise<Object> {
    try {
      const shopName = username + ' shop';
      const shopDescription =
        'This is your shop, try to buy something in the global shop';

      const newShop: IShop = new Shop(
        [],
        shopName.toUpperCase(),
        shopDescription
      );
      const newUser: IUser = new User(username, email, password, newShop);

      const userSignedUp: IUser = await this._userRepository.signUpAsync(
        newUser
      );

      if (!userSignedUp) {
        return { msg: 'user already exists', payload: null, status: 500 };
      }

      const userDto = toUserDTO(userSignedUp);
      const token = JWTUtil.sign(userSignedUp.user_id);
      return { msg: 'success', payload: { user: userDto, token }, status: 200 };
    } catch (error) {
      console.log(error);
      return {
        msg: 'unable to sign up',
        payload: null,
        status: 500,
      };
    }
  }
  //===============================create admin =========================================
  async createAdminAsync({ username, email, password }): Promise<void> {
    try {
      const shop = new Shop(
        [],
        'Global shop',
        'this is the global shop!!!',
        true
      );
      const admin = new User(username, email, password, shop, true);
      await this._userRepository.signUpAsync(admin);
    } catch (error) {
      console.log(error);
    }
  }
}

export default UserService;
