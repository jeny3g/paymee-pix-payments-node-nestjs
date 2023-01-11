import 'dotenv/config';
import 'reflect-metadata';

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configureSwagger } from '@shared/infra/config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  configureSwagger(app);

  app.useGlobalPipes(
    new ValidationPipe({
      forbidUnknownValues: false,
    }),
  );

  await app.listen(3000);
}
bootstrap();
