import { INestApplication } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';

const configureSwagger = (application: INestApplication): void => {
  const swaggerConfig = new DocumentBuilder()
  .setTitle('PayMee pix transaction')
  .setDescription('A simple project with PayMee create transaction flow')
  .setVersion('1.0')
  .addApiKey({
    type: 'apiKey',
    name: 'x-api-key',
    in: 'header',
    description: 'API key for PayMee',
  }, 'paymeeApiKey',)
  .addApiKey({
    type: 'apiKey',
    name: 'x-api-token',
    in: 'header',
    description: 'API token for PayMee',
  }, 'paymeeApiToken')
  .build();

  const swaggerDocumentOptions: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  };

  const swaggerDocument = SwaggerModule.createDocument(
    application,
    swaggerConfig,
    swaggerDocumentOptions
  );

  SwaggerModule.setup(
    `/api`,
    application,
    swaggerDocument
  );
};

export { configureSwagger };
