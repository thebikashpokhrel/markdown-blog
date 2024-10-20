import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    summary: z.string(),
    coverImageUrl: z.string(),
    authorImageUrl: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
