import { Server, createServer } from 'http';
import express from 'express';

const ExpressServer = async (): Promise<{
  server: Server;
  app: express.Application;
}> => {
  const app: express.Application = express();
  const server = createServer(app);
  return { app, server };
};

export default ExpressServer;
