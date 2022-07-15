import { Server } from 'http';
import express from 'express';
import ExpressServer from './server';
import Logger from '@universe/library/logger';
import Database from './lumpers/database';

const ServerLoader: Promise<{ app: express.Application; server: Server }> =
  ExpressServer();

ServerLoader.then(({ app, server }) => {
  server.listen(process.env.PORT, async () => {
    Logger.instance.info(
      `${process.env.NODE_ENV} service listening on port ${process.env.PORT}`
    );
  });
});

process.on('uncaughtException', (err) => {
  console.log(`Uncaught Exception: ${err.message}`);
  Database.Close();
  process.exit(1);
});
