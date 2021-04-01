import { Response, Request } from 'express';

interface IUserController {
  signUpAsync(req: Request, res: Response): void;
  signInAsync(req: Request, res: Response): void;
  getUserByTokenAsync(req: Request, res: Response): void;
}

export default IUserController;
