import express from 'express';
import { Server } from 'http';
import Logger from '@universe/library/logger';
import Database from './database';

const Lumper = async ({
  app
}: {
  app: express.Application;
  server: Server;
}): Promise<void> => {
  Logger.Loader();
  await Database.Loader();
};

export default Lumper;
