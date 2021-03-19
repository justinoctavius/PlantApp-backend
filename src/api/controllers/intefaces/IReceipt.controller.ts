import { Response, Request } from 'express';

interface IReceiptController {
  getAllReceiptAsync(req: Request, res: Response): Promise<void>;
  getReceiptAsync(req: Request, res: Response): Promise<void>;
}

export default IReceiptController;
