import 'dotenv/config';
import 'reflect-metadata';

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('PayMee pix transaction')
    .setDescription('A simple project with PayMee create transaction flow')
    .setVersion('1.0')
    .addSecurity('apiKey', {
      type: 'apiKey',
      name: 'x-api-key',
      in: 'header',
      description: 'API key for PayMee',
    })
    .addSecurity('apiToken', {
      type: 'apiKey',
      name: 'x-api-token',
      in: 'header',
      description: 'API token for PayMee',
    })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      forbidUnknownValues: false,
    }),
  );

  await app.listen(3000);
}
bootstrap();
