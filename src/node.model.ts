import { DataTypes, Model } from 'sequelize';
import { sequelize } from './sequelize';

export class Node extends Model {
  public id!: number;
  public name!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Node.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    schema: 'myschema',
    tableName: 'nodes',
    sequelize: sequelize, // this bit is important
  },
);
