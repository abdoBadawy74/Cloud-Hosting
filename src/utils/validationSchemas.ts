import { z } from "zod";

export const createArticleSchema = z.object({
  title: z.string().min(3,"title must more than 3 chars").max(100),
  body: z.string().min(10, "body must more than 10 chars"),
});
