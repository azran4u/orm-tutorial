"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize({
    host: '127.0.0.1',
    port: 5432,
    database: 'postgresdb',
    password: 'admin123',
    username: 'postgresadmin',
    dialect: 'postgres',
    logging: false
});
