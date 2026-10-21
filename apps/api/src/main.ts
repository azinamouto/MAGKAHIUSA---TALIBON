import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './module';
import { validateEnv } from './config/env';

async function bootstrap() {
  const env = validateEnv();
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: env.NODE_ENV !== 'test' }),
  );

  app.enableCors({ origin: env.parsedCorsOrigins, credentials: false });
  await app.listen(env.PORT, '0.0.0.0');
}

bootstrap().catch((error: unknown) => {
  console.error('API boot failed', error);
  process.exitCode = 1;
});
