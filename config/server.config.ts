import * as express from 'express';
import * as path from 'path';
import shopRoutes from '../src/api/routes/shop.routes';
import userRoutes from '../src/api/routes/user.routes';
import categoryRoutes from '../src/api/routes/category.routes';
import productRoutes from '../src/api/routes/product.routes';
import receiptRoutes from '../src/api/routes/receipt.routes';
import tradeRoutes from '../src/api/routes/trade.routes';
import imageRoutes from '../src/api/routes/image.routes';

const serverConfig = (app) => {
  //middlewares
  app.use(express.json());
  app.use(
    express.static(path.join(__dirname, '..', 'src', 'assets', 'upload'))
  );

  //routes
  app.use('/api/', shopRoutes);
  app.use('/api/', userRoutes);
  app.use('/api/', categoryRoutes);
  app.use('/api/', productRoutes);
  app.use('/api/', receiptRoutes);
  app.use('/api/', tradeRoutes);
  app.use('/api/', imageRoutes);
};

export default serverConfig;
