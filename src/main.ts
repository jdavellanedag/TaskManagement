import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common'
import config from './config/configuration';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);
  await app.listen(config().port);
  logger.log(`Application listening on port ${config().port}`);
}
bootstrap();
