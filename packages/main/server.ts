import { Server, createServer } from 'http';
import express, { Application } from 'express';
import Lumper from './lumpers/index';

const ExpressServer = async (): Promise<{
  server: Server;
  app: Application;
}> => {
  const app: Application = express();
  const server = createServer(app);
  Lumper({ app, server });
  return { app, server };
};

export default ExpressServer;
