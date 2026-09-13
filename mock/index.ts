import { resolve } from 'path';

import * as api from './api';

import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app
  .use((_req, _res, next) => setTimeout(() => next(), Math.ceil(Math.random() * 2_500)))
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json());

app.get('/example/one', api.exampleGetFn);

const staticDir = resolve(__dirname, '..');
app.use(express.static(staticDir));

export default app;
