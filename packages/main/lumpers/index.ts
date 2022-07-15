import express from 'express';
import { Server } from 'http';
import Logger from '@universe/library/logger';

const Lumper = async ({
  app
}: {
  app: express.Application;
  server: Server;
}): Promise<void> => {
    Logger.Loader();
};

export default Lumper;
