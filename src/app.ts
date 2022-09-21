import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { json, urlencoded } from 'body-parser';

import eventRouter from './event.router';

dotenv.config();

const app: Express = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('👋 Hi there!');
});
app.use('/event', eventRouter);

export default app;
