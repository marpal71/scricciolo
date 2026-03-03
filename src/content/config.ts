import { defineCollection, z } from 'astro:content';

const scuolaCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

const aboutCollection = defineCollection({
    type: 'content',
    schema: z.object({})
});

export const collections = {
  'scuola': scuolaCollection,
  'about': aboutCollection,
};
