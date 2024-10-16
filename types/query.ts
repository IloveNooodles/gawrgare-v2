import { z } from "zod";

export const projectQueryParamSchema = z.object({ page: z.string().optional(), per_page: z.string().optional() });

export type ProjectQueryParamSchema = z.infer<typeof projectQueryParamSchema>;

