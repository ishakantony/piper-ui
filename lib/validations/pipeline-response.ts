import * as z from "zod";
import { dateTimeSchema, slugSchema } from "./common";

export const pipelineResponseSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  slug: slugSchema,
  description: z.string().max(4000),
  createdAt: dateTimeSchema,
  updatedAt: dateTimeSchema,
});

export const paginatedPipelineResponseSchema = z.object({
  content: z.array(pipelineResponseSchema),
  totalItems: z.number(),
  totalPages: z.number(),
  pageSize: z.number(),
  pageNumber: z.number(),
  isFirstPage: z.boolean(),
  isLastPage: z.boolean(),
});

export type PipelineResponse = z.infer<typeof pipelineResponseSchema>;

export type PaginatedPipelineResponse = z.infer<
  typeof paginatedPipelineResponseSchema
>;
