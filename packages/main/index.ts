import { Server } from 'http';
import express from 'express';
import ExpressServer from './server';

const ServerLoader: Promise<{ app: express.Application; server: Server }> =
  ExpressServer();

ServerLoader.then(({ app, server }) => {
  server.listen(process.env.PORT, async () => {
    console.log(
      `${process.env.NODE_ENV} service listening on port ${process.env.PORT}`
    );
  });
});
