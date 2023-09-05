import { z } from "zod";

export const idSchema = z.string().uuid();

export const slugSchema = z.string().regex(/^[a-z0-9-]+$/);

export const dateTimeSchema = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/)
  .transform((dateString) => new Date(dateString));
