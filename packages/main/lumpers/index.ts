import express from 'express';
import Logger from '@universe/library/logger';
import Database from './database';
import FrameworkLoader from '@universe/lumpers/framework';

const Lumper = async ({ app }: { app: express.Application }): Promise<void> => {
  Logger.Loader();
  FrameworkLoader({ app });
  await Database.Loader();
};

export default Lumper;
