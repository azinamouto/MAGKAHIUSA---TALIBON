import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter({ logger: true }));
  const origins = (process.env.CORS_ORIGINS ?? 'http://localhost:5173,http://localhost:5174,http://localhost:5175').split(',');
  app.enableCors({ origin: origins, credentials: false });
  await app.listen(Number(process.env.PORT ?? 4000), '0.0.0.0');
}
bootstrap().catch((error: unknown) => { console.error('API boot failed', error); process.exitCode = 1; });
