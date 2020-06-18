import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configDBService } from './config/typeorm.config';
import { ConfigModule } from '@nestjs/config'
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(configDBService.getTypeOrmConfig()),
    TasksModule,
  ],
})
export class AppModule {}
