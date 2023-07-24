import express from 'express';
import bodyParser from 'body-parser';
import router from './routers';
import dotenv from 'dotenv';
import 'reflect-metadata';

dotenv.config()

let app = express();
app.use(bodyParser.json());

app.use(router);

export default app
