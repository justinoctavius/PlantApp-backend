import { Response, Request } from 'express';

interface ICategoryController {
  getAllCategoryAsync(req: Request, res: Response): Promise<void>;
  getCategoryAsync(req: Request, res: Response): Promise<void>;
  insertCategoryAsync(req: Request, res: Response): Promise<void>;
  updateCategoryAsync(req: Request, res: Response): Promise<void>;
  removeCategoryAsync(req: Request, res: Response): Promise<void>;
}

export default ICategoryController;
