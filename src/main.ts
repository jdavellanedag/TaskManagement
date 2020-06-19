import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common'
import * as config from 'config';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);
  const serverConfig = config.get('server');

  if (process.env.NODE_ENV === 'development'){
    app.enableCors();
    logger.log(`Accepting requests on development mode`);
  } else {
    const corsorigin = process.env.CORS_ORIGIN || serverConfig.origin
    app.enableCors({origin: corsorigin});
    logger.log(`Accepting requests from origin ${corsorigin}`);
  }


  const port = process.env.PORT || serverConfig.port;
  await app.listen(port);
  logger.log(`Application listening on port ${port}`);
}
bootstrap();
