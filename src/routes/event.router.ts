import express, { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { collections } from '../services/database.service';
import Event from '../models/event';
import { formatDate } from '../util/database.helper';

const eventRouter = express.Router();

eventRouter.get('/', async (req: Request, res: Response) => {
  try {
    const events =
      ((await collections.events?.find({}).toArray()) as unknown as Event[]) ||
      [];
    res.status(200).send(events);
  } catch (error) {
    res.status(500).send('error.message');
  }
});

eventRouter.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const events =
      ((await collections.events
        ?.find({ _id: new ObjectId(id) })
        .toArray()) as unknown as Event[]) || [];
    res.status(200).send(events);
  } catch (error) {
    res.status(500).json(error);
  }
});

eventRouter.post('/', async (req: Request, res: Response) => {
  try {
    const { timeSlots, selectedTimeSlots } = req.body;

    const newEvent = {
      ...req.body,
      timeSlots: formatDate(timeSlots)
    } as Event;

    if (selectedTimeSlots) {
      newEvent.selectedTimeSlots = formatDate(selectedTimeSlots);
    }

    const result = await collections.events?.insertOne(newEvent);

    result
      ? res
          .status(201)
          .send(`Successfully created a new event with id ${result.insertedId}`)
      : res.status(500).send('Failed to create a new event.');
  } catch (error) {
    res.status(400).json(error);
  }
});

eventRouter.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { timeSlots, selectedTimeSlots } = req.body;

    const updateEvent = {
      ...req.body,
      timeSlots: formatDate(timeSlots),
      selectedTimeSlots: formatDate(selectedTimeSlots)
    } as Event;
    const query = { _id: new ObjectId(id) };

    const result = await collections.events?.updateOne(query, {
      $set: updateEvent
    });
    result
      ? res.status(201).send(`Successfully updated event with id ${id}`)
      : res.status(304).send(`Event with id ${id} not updated`);
  } catch (error) {
    res.status(400).json(error);
  }
});

eventRouter.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const query = { _id: new ObjectId(id) };

    const result = await collections.events?.deleteOne(query);

    if (result && result.deletedCount) {
      res.status(202).send(`Successfully deleted event with id ${id}`);
    } else if (!result) {
      res.status(400).send(`Failed to remove event with id ${id}`);
    } else if (!result.deletedCount) {
      res.status(404).send(`Event with id ${id} does not exist`);
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

export default eventRouter;
