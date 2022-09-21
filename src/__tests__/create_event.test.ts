import app from '../app';
import { CreateEvent } from '../types';

import request from 'supertest';

describe('[Create event] - POST /event', () => {
  const payload: CreateEvent = {
    name: 'Event name',
    description: 'Event description',
    duration: 123,
    participants: ['user 1', 'user 2'],
    timeSlots: [1664654400000, 1664656200000]
  };

  it('should create new event', async () => {
    const result = await request(app).post('/event').send(payload);
    expect(result.statusCode).toEqual(200);
    expect(result.body).toEqual({
      id: 'b183d4e4-c32e-4121-b6dd-b046c117058a',
      ...payload
    });
  });

  it('should only return defined properties', async () => {
    const payloadWithAdditionalField = { customAttr: 'random', ...payload };

    const result = await request(app)
      .post('/event')
      .send(payloadWithAdditionalField);
    expect(result.statusCode).toEqual(200);
    expect(result.body).toEqual({
      id: 'b183d4e4-c32e-4121-b6dd-b046c117058a',
      ...payload
    });
  });
});
