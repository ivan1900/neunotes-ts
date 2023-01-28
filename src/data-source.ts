import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import User from './entity/User';

dotenv.config();

const DBOrigin = new DataSource({
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  synchronize: true,
  migrationsRun: false,
  logging: false,
  entities: [User],
  subscribers: [],
  migrations: ['./src/migrations/**/*.ts'],
});

const DBMemory = new DataSource({
  type: 'sqlite',
  database: ':memory:',
  dropSchema: true,
  entities: [User],
  synchronize: true,
  migrationsRun: true,
  logging: false,
});

const AppDataSource = process.env.NODE_ENV !== 'test' ? DBOrigin : DBMemory;

export default AppDataSource;
