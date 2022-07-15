import { Sequelize } from 'sequelize';

const database: Sequelize = new Sequelize(
  process.env.SQL_DATABASE || '',
  process.env.SQL_USERNAME || '',
  process.env.SQL_PASSWORD || '',
  {
    logging: false,
    host: process.env.SQL_HOST || 'localhost',
    dialect: 'mysql',
    define: {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    }
  }
);

export default database;
