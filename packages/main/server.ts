import { Server, createServer } from 'http';
import express from 'express';
import Lumper from './lumpers/index'

const ExpressServer = async (): Promise<{
  server: Server;
  app: express.Application;
}> => {
  const app: express.Application = express();
  const server = createServer(app);
  Lumper({ app, server });
  return { app, server };
};

export default ExpressServer;
