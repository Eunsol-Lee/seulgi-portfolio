import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects', generateId: ({ entry }) => entry.replace(/\.mdx$/, '') }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    client: z.string(),
    year: z.number(),
    role: z.string(),
    scope: z.string(),
    category: z.enum(['Product Design', 'Package Design']),
    order: z.number(),
    slug: z.string(),
    lang: z.enum(['ko', 'en']),
    color: z.string().optional(),
    navPrev: z.object({ title: z.string(), slug: z.string() }).optional(),
    navNext: z.object({ title: z.string(), slug: z.string() }).optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog', generateId: ({ entry }) => entry.replace(/\.mdx$/, '') }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    excerpt: z.string(),
    date: z.string(),
    tag: z.string(),
    slug: z.string(),
    lang: z.enum(['ko', 'en']),
    pullquote: z.string().optional(),
    navPrev: z.object({ title: z.string(), slug: z.string() }).optional(),
    navNext: z.object({ title: z.string(), slug: z.string() }).optional(),
  }),
});

export const collections = { projects, blog };
