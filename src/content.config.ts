import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './' }),
});

export const collections = { writing };
