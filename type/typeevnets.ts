import { PortableTextBlock } from 'next-sanity';

export type Event = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  date: string;
  time?: string;
  location?: string;
  city?: string;
  mode?: 'presencial' | 'online' | 'hibrido';
  description?: PortableTextBlock[];
  image?: {
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
};
