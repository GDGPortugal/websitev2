import { getEvents } from '@/actions/getEventActions';

import EventsGDG from './eventsMap';

export default async function EventsMaps() {
  const events = await getEvents();
  return <EventsGDG events={events} />;
}
