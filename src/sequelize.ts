import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  host: '127.0.0.1',
  port: 5432,
  database: 'postgresdb',
  password: 'admin123',
  username: 'postgresadmin',
  dialect: 'postgres',
  logging: false
});
