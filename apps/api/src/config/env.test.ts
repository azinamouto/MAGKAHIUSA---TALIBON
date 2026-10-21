import { describe, it, expect } from 'vitest';
import { validateEnv } from './env';

describe('Environment Validation Contract', () => {
  const validBaseEnv = {
    DATABASE_URL: 'postgresql://postgres:postgres@localhost:5432/magkahiusa_dev?schema=public',
    PORT: '4000',
    NODE_ENV: 'development',
    CORS_ORIGINS: 'http://localhost:5173,http://localhost:5174',
  };

  it('validates a complete and correct environment config', () => {
    const config = validateEnv(validBaseEnv);
    expect(config.PORT).toBe(4000);
    expect(config.NODE_ENV).toBe('development');
    expect(config.parsedCorsOrigins).toEqual(['http://localhost:5173', 'http://localhost:5174']);
  });

  it('applies standard defaults when optional fields are omitted', () => {
    const minimalEnv = {
      DATABASE_URL: 'postgresql://user:pass@localhost:5432/db',
    };
    const config = validateEnv(minimalEnv);
    expect(config.PORT).toBe(4000);
    expect(config.NODE_ENV).toBe('development');
    expect(config.parsedCorsOrigins.length).toBeGreaterThan(0);
  });

  it('rejects invalid or non-postgres DATABASE_URL', () => {
    expect(() =>
      validateEnv({
        ...validBaseEnv,
        DATABASE_URL: 'mysql://user:pass@localhost:3306/db',
      }),
    ).toThrow('DATABASE_URL must be a valid PostgreSQL connection string');
  });

  it('rejects out-of-range port numbers', () => {
    expect(() =>
      validateEnv({
        ...validBaseEnv,
        PORT: '80', // below 1024
      }),
    ).toThrow('Environment validation failed');

    expect(() =>
      validateEnv({
        ...validBaseEnv,
        PORT: '70000', // above 65535
      }),
    ).toThrow('Environment validation failed');
  });

  it('rejects invalid NODE_ENV values', () => {
    expect(() =>
      validateEnv({
        ...validBaseEnv,
        NODE_ENV: 'staging',
      }),
    ).toThrow('Environment validation failed');
  });
});
