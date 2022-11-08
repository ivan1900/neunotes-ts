import dotenv from 'dotenv';
import app from './app';

import 'reflect-metadata';

dotenv.config();

const port = Number(process.env.APP_PORT);

const server = app.listen(port);
// eslint-disable-next-line
console.log('server on port', port);

export default server;
