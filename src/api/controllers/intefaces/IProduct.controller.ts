import { Response, Request } from 'express';

interface IProductController {
  getAllProductAsync(req: Request, res: Response): Promise<void>;
  getProductAsync(req: Request, res: Response): Promise<void>;
  insertProductAsync(req: Request, res: Response): Promise<void>;
  updateProductAsync(req: Request, res: Response): Promise<void>;
  removeProductAsync(req: Request, res: Response): Promise<void>;
}

export default IProductController;
