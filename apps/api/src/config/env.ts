import { z } from 'zod';

export const EnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().int().min(1024).max(65535).default(4000),
  DATABASE_URL: z
    .string()
    .min(1, 'DATABASE_URL is required')
    .refine(
      (url) => url.startsWith('postgresql://') || url.startsWith('postgres://'),
      'DATABASE_URL must be a valid PostgreSQL connection string',
    ),
  CORS_ORIGINS: z.string().default('http://localhost:5173,http://localhost:5174,http://localhost:5175'),
});

export type EnvConfig = z.infer<typeof EnvSchema>;

export interface ValidatedEnv extends EnvConfig {
  parsedCorsOrigins: string[];
}

export function validateEnv(
  env: Record<string, unknown> = typeof process !== 'undefined' ? process.env : {},
): ValidatedEnv {
  const result = EnvSchema.safeParse(env);

  if (!result.success) {
    const issues = result.error.issues
      .map((issue) => ` - [${issue.path.join('.') || 'root'}]: ${issue.message}`)
      .join('\n');
    throw new Error(`Environment validation failed:\n${issues}`);
  }

  const parsedCorsOrigins = result.data.CORS_ORIGINS.split(',')
    .map((origin) => origin.trim())
    .filter((origin) => origin.length > 0);

  return {
    ...result.data,
    parsedCorsOrigins,
  };
}
