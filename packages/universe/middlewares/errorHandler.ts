/** @namespace Universe.Middlewares  */

import KernelError from '../fallacy/kernelError';
import express from 'express';
import Logger from '@universe/library/logger';

const ErrorHandler = (
  error: any,
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
): express.Response => {
  Logger.instance.error(JSON.stringify(error));

  if (error instanceof KernelError) {
    return response
      .status(error.statusCode)
      .json({ status: false, errors: error.serialize() });
  }

  return response
    .status(400)
    .json({ status: false, errors: [{ message: 'Something went wrong.' }] });
};

export default ErrorHandler;
