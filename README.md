# availability

Plan an event with friends, group of strangers the API-way!

# Journey

1. [Organiser] Create an event (it should include a list of participants and date & time slots)
2. [Participants] Select preferred time slots
3. [All] Retrieve results. Voting ends when all participants have voted

# API

_Create event_

```json
POST /event
{
  name: <string>
  description:  <string>
  timeSlots: [<datetime>,..],
  duration: <number>,
  participants: [<string>, <string>]
}

Response
{
  id:  <uid>
  name: <string>
  description:  <string>
  timeSlots: [<datetime>,..],
  duration: <number>,
  participants: [<string>, <string>]
}
```

_Select preferred slots_

```json
PUT /event/<id>
{
  participant: <string>
  preferredTimeSlots: [<datetime>,..]
}

Response
{
  message: 'updated',
  participant: <string>,
  selectedTimeSlots: [<datetime>,..]
}
```

_View list available time slots and results_

```json
GET /event/<id>
{
  name: <string>
  description:  <string>
  timeSlots: [<datetime>,..],
  duration: <number>,
  preferredTimeSlots: [<datetime>,..]
}

Response
{
    name: <string>,
    description: <string>,
    timeSlots: [<datetime>,..],
    duration: <number>,
    preferredTimeSlots: [<datetime>,..],
    participants: [<string>, <string>],
    voted: [<string>, <string>]
  }
```
