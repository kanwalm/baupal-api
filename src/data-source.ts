import { DataSource } from 'typeorm';
import { EnergyConsumption } from './entity/EnergyConsumption';
import * as dbConfig from '../db.config.json';
const { host, port, username, database, password } = dbConfig;
export const AppDataSource = new DataSource({
  host,
  username,
  password,
  database,
  port: parseInt(port),
  type: 'postgres',
  synchronize: true,
  logging: false,
  entities: [EnergyConsumption],
  migrations: [],
  subscribers: [],
});
