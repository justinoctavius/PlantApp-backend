import { Response, Request } from 'express';

interface IShopController {
  getAllShopAsync(req: Request, res: Response): Promise<void>;
  getGlobalShopAsync(req: Request, res: Response): Promise<void>;
  updateShopAsync(req: Request, res: Response): Promise<void>;
  getShopAsync(req: Request, res: Response): Promise<void>;
}

export default IShopController;
