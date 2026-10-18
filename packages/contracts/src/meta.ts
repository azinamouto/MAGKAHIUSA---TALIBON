import { z } from 'zod';
export const SystemMetaSchema = z.object({
  name: z.literal('MAGKAHIUSA–TALIBON'),
  version: z.string(),
  status: z.literal('foundation-only'),
  disclaimer: z.string(),
});
export type SystemMeta = z.infer<typeof SystemMetaSchema>;
