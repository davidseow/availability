import { Router, Request, Response } from 'express';
import { Event } from '../types';

const testRouter = Router();

testRouter.post('/', (req: Request, res: Response) => {
  const { name, description, timeSlots, participants, duration } = req.body;

  const response: Event = {
    id: 'b183d4e4-c32e-4121-b6dd-b046c117058a',
    name,
    description,
    timeSlots,
    participants,
    duration
  };

  res.status(200).json(response);
});

testRouter.put('/:id', (req: Request, res: Response) => {
  res.send({
    message: 'updated',
    participant: 'Dave',
    selectedTimeSlots: [1664654400000]
  });
});

testRouter.get('/:id', (req: Request, res: Response) => {
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

export default testRouter;
