import { Response, Request } from 'express';

interface ITradeController {
  buyProductAsync(req: Request, res: Response): void;
}

export default ITradeController;
