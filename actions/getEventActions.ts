'use server';

import { client } from '@/sanity/client';
import { Event } from '@/type/typeevnets';
const EVENTS_QUERY = `*[
  _type == "event"
  && defined(slug.current)
]|order(date asc){
  _id,
  title,
  slug,
  date,
  time,
  location,
  city,
  mode,
  description,
  image
}`;

export async function getEvents(): Promise<Event[]> {
  return client.fetch<Event[]>(EVENTS_QUERY, {}, { next: { revalidate: 60 } });
}
