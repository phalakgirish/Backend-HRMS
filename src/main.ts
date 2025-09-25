import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

   const config = new DocumentBuilder()
    .setTitle('Example API')
    .setDescription('NestJS API with Swagger')
    .setVersion('1.0')
      .addBearerAuth()  
    // .addTag('users') 
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Swagger will be available at /api

  app.enableCors();
   app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads',
  });
  await app.listen(process.env.PORT ?? 3000);
  
  app.useGlobalPipes(
  new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: false,
  }),
);

}
bootstrap();
