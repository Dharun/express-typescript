import { Server, createServer } from 'http';
import express, { Application } from 'express';
import Lumper from './lumpers/index';
import NotFoundError from '@universe/fallacy/notFound';
import ErrorHandler from '@universe/middlewares/errorHandler';

const ExpressServer = async (): Promise<{
  server: Server;
  app: Application;
}> => {
  const app: Application = express();
  const server = createServer(app);
  Lumper({ app });
  app.all('*', async () => {
    throw new NotFoundError();
  });
  app.use(ErrorHandler);
  return { app, server };
};

export default ExpressServer;
