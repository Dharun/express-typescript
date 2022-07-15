import 'express-async-errors';
import express, { Application } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import useragent from 'express-useragent';

const FrameworkLoader = ({ app }: { app: Application }): Application => {
  app.use(helmet());
  app.use(express.json({ limit: '50mb' }));
  app.use(useragent.express());
  app.use(morgan('tiny'));
  return app;
};

export default FrameworkLoader;
