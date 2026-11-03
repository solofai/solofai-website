import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

/** Fields shared by every Markdown entry that can be hidden while in progress. */
const draftable = { draft: z.boolean().default(false) };

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().max(200),
    status: z.enum(['concept', 'prototype', 'live', 'research', 'archived']),
    /** Lower numbers list first. Ties fall back to title order. */
    order: z.number().int().default(100),
    tags: z.array(z.string()).default([]),
    links: z.array(z.object({ label: z.string(), href: z.url() })).default([]),
    featured: z.boolean().default(false),
    ...draftable,
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().max(200),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    ...draftable,
  }),
});

const publications = defineCollection({
  loader: file('src/data/publications.yaml'),
  schema: z.object({
    authors: z.array(z.string()).min(1),
    title: z.string(),
    venue: z.string(),
    year: z.number().int(),
    kind: z.enum(['conference', 'journal', 'thesis']),
    status: z.enum(['published', 'accepted']).default('published'),
    doi: z.string().optional(),
    url: z.url().optional(),
  }),
});

/** Month precision is all a résumé needs; "YYYY-MM" strings stay readable in YAML. */
const yearMonth = z.string().regex(/^\d{4}(-\d{2})?$/, 'Use YYYY or YYYY-MM');

const experience = defineCollection({
  loader: file('src/data/experience.yaml'),
  schema: z.object({
    role: z.string(),
    org: z.string(),
    url: z.url().optional(),
    location: z.string(),
    start: yearMonth,
    end: yearMonth.optional(),
    highlights: z.array(z.string()).default([]),
  }),
});

const education = defineCollection({
  loader: file('src/data/education.yaml'),
  schema: z.object({
    degree: z.string(),
    institution: z.string(),
    year: z.number().int(),
    focus: z.string().optional(),
  }),
});

export const collections = { work, writing, publications, experience, education };
