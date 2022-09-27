import { ObjectId, Int32 } from 'mongodb';

export default class Event {
  constructor(
    public description: string,
    public duration: Int32,
    public name: string,
    public participants: string[],
    public timeSlots: Date[],
    public voted?: string[],
    public selectedTimeSlots?: Date[],
    public id?: ObjectId
  ) {}
}
