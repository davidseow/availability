import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { json, urlencoded } from 'body-parser';

dotenv.config();

const app: Express = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('👋 Hi there!');
});

app.post('/event', (req: Request, res: Response) => {
  res.send({
    id: 'b183d4e4-c32e-4121-b6dd-b046c117058a',
    name: 'Poker night 🚬🃏',
    description: 'Poker night, with fake dinero',
    timeSlots: [1664654400000, 1664656200000],
    participants: ['Dave', 'Steph'],
    duration: 3600
  });
});

app.put('/event/:id', (req: Request, res: Response) => {
  res.send({
    message: 'updated',
    participant: 'Dave',
    selectedTimeSlots: [1664654400000]
  });
});

app.get('/event/:id', (req: Request, res: Response) => {
  res.send({
    name: 'Poker night 🚬🃏',
    description: 'Poker night, with fake dinero',
    timeSlots: [1664654400000, 1664656200000],
    duration: 3600,
    selectedTimeSlots: [1664654400000, 1664654400000, 1664656200000],
    participants: ['Dave', 'Steph'],
    voted: ['Dave', 'Steph']
  });
});

export default app;
