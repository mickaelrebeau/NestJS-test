import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DefaultInterceptor } from './interceptors/defaultinterceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Global example')
    .setDescription('The global API description')
    .setVersion('0.0.1')
    .addTag('globals')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api', app, document );

  // app.useGlobalInterceptors(new DefaultInterceptor())
  await app.listen(3000);
}
bootstrap();
