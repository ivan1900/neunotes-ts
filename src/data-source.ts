import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import User from './entity/User';
import { database1667897855144 } from './migrations/1667897855144-database';
import { database1667899175885 } from './migrations/1667899175885-database';

dotenv.config();

const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  synchronize: true,
  migrationsRun: true,
  logging: false,
  entities: [User],
  subscribers: [],
  // migrations: ['src/migration/**/*.ts'],
  migrations: [database1667897855144, database1667899175885],
});

export default AppDataSource;
