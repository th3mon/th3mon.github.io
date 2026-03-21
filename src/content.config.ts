import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    permalink: z.string(),
    categories: z.union([z.string(), z.array(z.string())]).optional()
  })
});

const drafts = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    categories: z.union([z.string(), z.array(z.string())]).optional()
  })
});

export const collections = { blog, drafts };
