import winston from 'winston';

class Logger {
  static instance: winston.Logger;

  static Loader(): void {
    const transports: winston.transport[] = [
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.colorize({
            all: true,
            colors: { info: 'blue', error: 'red', silly: 'yellow' }
          }),
          winston.format.simple()
        )
      })
    ];

    // To keep the data in file

    // transports.push(
    //   new winston.transports.File({ filename: 'logfile.log', level: 'info' })
    // );

    Logger.instance = winston.createLogger({
      level: 'info',
      format: winston.format.combine(
        winston.format.errors({ stack: true }),
        winston.format.simple()
      ),
      transports: transports
    });
  }
}

export default Logger;
