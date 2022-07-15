import Logger from '@universe/library/logger';
import database from '@universe/lumpers/database';
import { Model, ModelStatic } from 'sequelize/types';
import ModelManager from 'sequelize/types/model-manager';

class Database {
  // Provides better access while using filters
  static models: Record<string, ModelStatic<any>> = {};

  // Tagging Models for access
  static list = [];

  static async Loader(): Promise<void> {
    try {
      Logger.instance.info(
        `Connecting to ${process.env.SQL_DATABASE} Database on ${process.env.SQL_HOST}.`
      );
      await database.authenticate();
      Logger.instance.info(
        `Connected to ${process.env.SQL_DATABASE} Database on ${process.env.SQL_HOST}.`
      );

      // Tagged models

      //   for (const model of Database.list) {
      //     Database.models[model.tableName] = model;
      //   }

      // creates all the table if it doesn't exist
      await database.sync({ alter: false });
    } catch (e) {
      Logger.instance.error(e);
    }
  }

  static async Close(): Promise<void> {
    try {
      await database.close();
    } catch (e) {
      Logger.instance.error(e);
    }
  }
}

export default Database;
