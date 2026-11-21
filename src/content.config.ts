// content.config.ts — defines the "projects" collection and its frontmatter fields.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  // Every .md file in this folder becomes one project page
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.string(),
      year: z.number(),
      description: z.string(),
      cover: image(),          // image file imported from src/assets
      coverAlt: z.string(),    // describes the cover for screen readers
      tools: z.array(z.string()),
      featured: z.boolean().default(false),
      order: z.number().optional(),
    }),
});

export const collections = { projects };
