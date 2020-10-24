import { create } from 'domain';
import 'reflect-metadata';
import { ConnectionOptions, createConnection } from 'typeorm';
import { Photo } from './entity/Photo';

export const options: ConnectionOptions = {
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  database: 'postgresdb',
  password: 'admin123',
  username: 'postgresadmin',
  entities: [Photo],
  synchronize: true,
  logging: false,
  schema: 'typorm'
};

export async function start() {
  try {
      
    const connection = await createConnection(options);
  } catch (error) {
    console.error(error);
  }
}
