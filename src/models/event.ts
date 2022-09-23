import { ObjectId, Int32, Long } from 'mongodb';

export default class Event {
  constructor(
    public description: string,
    public duration: Int32,
    public name: string,
    public participants: string[],
    public selectedTimeSlots: Long[],
    public timeSlots: Long[],
    public voted: string[],
    public id?: ObjectId
  ) {}
}
