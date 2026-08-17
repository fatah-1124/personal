import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    date: z.coerce.date().optional(),
    excerpt: z.string().optional(),
    image: z.string().optional(),
    author: z.string().optional(),
    publishedAt: z.coerce.date().optional(),
  }),
});

export const collections = { blog };