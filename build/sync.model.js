"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sync = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("./sequelize");
class Sync extends sequelize_1.Model {
}
exports.Sync = Sync;
Sync.init({
    entityName: {
        type: sequelize_1.DataTypes.STRING(128),
        primaryKey: true,
    },
    dataVersion: {
        type: new sequelize_1.DataTypes.STRING(128),
        primaryKey: true,
    },
}, {
    schema: 'myschema',
    tableName: 'sync',
    sequelize: sequelize_2.sequelize,
});
