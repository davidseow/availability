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
  timeSlots: [<datetime>,..]
}

Response
{
  id:  <uid>
  name: <string>
  description:  <string>
  timeSlots: [<datetime>,..]
}
```

_Select preferred slots_

```json
PUT /event/<id>
{
  participant: <string>
  preferredTimeSlots: [<datetime>,..]
}
```

_View list available time slots and results_

```json
GET /event/<id>
{
  name: <string>
  description:  <string>
  timeSlots: [<datetime>,..]
  selectedTimeSlots: [
    {
      timeSlot: <datetime>
      count: number
    },..
  ]
}
```
