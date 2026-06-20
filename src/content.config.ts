import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160), // Hard SEO limit
    pubDate: z.date(),
    author: z.string(),
    tags: z.array(z.string()),
    // Essential for GEO context extraction:
    primarySummary: z.string().max(250).describe("A concise summary optimized for AI Overviews"),
  }),
});

const docsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/docs" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
  }),
});

const competitorsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/competitors" }),
  schema: z.object({
    name: z.string(),
    features: z.array(z.object({
      name: z.string(),
      us: z.boolean(),
      them: z.boolean(),
    })),
  }),
});

const faqCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/faqs" }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'faqs': faqCollection,
  'docs': docsCollection,
  'competitors': competitorsCollection,
};
