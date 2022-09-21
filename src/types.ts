export interface CreateEvent {
  name: string;
  description: string;
  timeSlots: number[];
  duration: number;
  participants: string[];
}

export interface Event extends CreateEvent {
  id: string;
}
