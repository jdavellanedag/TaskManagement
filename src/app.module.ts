import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configDBService } from './config/typeorm.config';
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module';
import * as config from 'config';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true,}),
    TypeOrmModule.forRoot(configDBService.getTypeOrmConfig()),
    TasksModule,
    AuthModule,
  ],
})
export class AppModule {}
