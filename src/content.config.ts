import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    summary: z.string(),
    icon: z.string(),
    order: z.number(),
    cta: z.string().default("Get a quote"),
    heroEyebrow: z.string().optional(),
  }),
});

export const collections = { services };
