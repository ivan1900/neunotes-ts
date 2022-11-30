import 'reflect-metadata';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import AppDataSource from './data-source';
import api from './api';
import InitSubscribers from './api/shared/domain/InitSubscribers';

export const app = express();

dotenv.config();
AppDataSource.initialize();

InitSubscribers();

// middelwares
app.use(cors({ origin: '*' }));
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v1', api);

export default app;
