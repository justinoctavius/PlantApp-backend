import IUser from '../../../domain/interfaces/IUser';

interface IUserRepository {
  getUserByIdAsync(user_id: string): Promise<IUser>;
  signUpAsync(user: IUser): Promise<IUser>;
  signInAsync(user: IUser): Promise<IUser>;
  getUserByAttributeAsync(attribute);
}

export default IUserRepository;
