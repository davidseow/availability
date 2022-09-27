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
  timeSlots: [<timestamp>,..],
  duration: <number>,
  participants: [<string>, <string>]
}
```

_Select preferred slots_

```json
PUT /event/<id>
{
  participant: <string>
  selectedTimeSlots: [<timestamp>,..]
}
```

_View list available time slots and results_

```json
GET /event/<id>

Response
{
    name: <string>,
    description: <string>,
    timeSlots: [<timestamp>,..],
    duration: <number>,
    participants: [<string>, <string>],
    selectedTimeSlots?: [<timestamp>,..],
    voted?: [<string>, <string>]
  }
```
