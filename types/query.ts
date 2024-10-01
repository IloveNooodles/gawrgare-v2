import { z } from "zod";

export const projectQueryParamSchema = z.object({ page: z.coerce.number() });

export type ProjectQueryParamSchema = z.infer<typeof projectQueryParamSchema>;

