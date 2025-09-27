import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*' });
  app.getHttpAdapter().getInstance().set('trust proxy', 1);
  app.use(cookieParser());
  await app.listen(3002);
}
bootstrap();
