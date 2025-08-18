import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
