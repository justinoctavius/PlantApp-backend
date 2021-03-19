interface IUserService {
  getUserAsync(user_id): Promise<Object>;
  signUpAsync(user: Object): Promise<Object>;
  signInAsync(user: Object): Promise<Object>;
  createAdminAsync(user: Object): Promise<void>;
}

export default IUserService;
