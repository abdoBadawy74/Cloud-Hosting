import { z } from "zod";

export const createArticleSchema = z.object({
  title: z.string().min(3, "title must more than 3 chars").max(100),
  description: z.string().min(10, "description must more than 10 chars"),
});
