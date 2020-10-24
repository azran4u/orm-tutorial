import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../sequelize';

export class Sync extends Model {
  public entityName!: string;
  public dataVersion!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Sync.init(
  {
    entityName: {
      type: DataTypes.STRING(128),
      primaryKey: true,
    },
    dataVersion: {
      type: new DataTypes.STRING(128)
    },
  },
  {
    schema: 'myschema',
    tableName: 'sync',
    sequelize: sequelize, // this bit is important
  },
);

