import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { json, urlencoded } from 'body-parser';
import { connectToDatabase } from './services/database.service';

import testRouter from './routes/test.router';
import eventRouter from './routes/event.router';

dotenv.config();

const app: Express = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('👋 Hi there!');
});

connectToDatabase()
  .then(() => {
    app.use('/event', eventRouter);
    app.use('/stub-event', testRouter);
  })
  .catch((error: Error) => {
    console.error('Database connection failed', error);
    process.exit();
  });

export default app;
