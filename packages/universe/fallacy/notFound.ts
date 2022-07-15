import KernelError from './kernelError';

class NotFoundError extends KernelError {
  statusCode = 404;

  constructor() {
    super('NotFound');

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serialize(): Record<string, string>[] {
    return [
      {
        message: "The page you're requesting is not found"
      }
    ];
  }
}

export default NotFoundError;
