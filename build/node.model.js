"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("./sequelize");
class Node extends sequelize_1.Model {
}
exports.Node = Node;
Node.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
}, {
    schema: 'myschema',
    tableName: 'nodes',
    sequelize: sequelize_2.sequelize,
});
