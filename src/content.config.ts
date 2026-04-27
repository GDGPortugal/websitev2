import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const events = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/events' }),
  schema: z.object({
    name: z.string(),
    city: z.string(),
    date: z.string(),
    venue: z.string(),
    description: z.string(),
    time: z.string(),
    location: z.string(),
    ticketType: z.enum(['Presencial', 'Online', 'Híbrido']),
    registrationUrl: z.string().url(),
    published: z.boolean().default(true),
  }),
});

const gdgs = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/gdgs' }),
  schema: z.object({
    name: z.string(),
    city: z.string(),
    description: z.string(),
    memberCount: z.number(),
    foundedYear: z.number(),
    meetupUrl: z.string().url(),
    published: z.boolean().default(true),
  }),
});

export const collections = { events, gdgs };
