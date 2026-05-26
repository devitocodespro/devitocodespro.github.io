import { defineCollection } from 'astro:content';
import { z } from 'astro:schema';
import { glob } from 'astro/loaders';

// Blog/news posts migrated from the Jekyll _posts/ directory.
// The glob loader derives each entry id (slug) from the filename, preserving the
// original Jekyll permalinks (e.g. 2020-09-4-launch -> /blog/launch handled in route).
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    subtitle: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    optimized_image: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    author: z.string().optional(),
    slug: z.string().optional(),
    // `draft: true` hides a post from listings (/blog index + homepage CaseStudies),
    // but the [...slug] route still serves the URL — so existing backlinks keep
    // working (e.g. /about links the 2020 launch post as the origin story).
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
