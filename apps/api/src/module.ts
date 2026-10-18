import { Module } from '@nestjs/common';
import { FoundationController } from './routes/foundation.controller';
@Module({ controllers: [FoundationController] })
export class AppModule {}
