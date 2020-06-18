import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import config from '../config/configuration';

class ConfigDBService {

    public getTypeOrmConfig(): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: config().database.host,
            port: config().database.port,
            username: config().database.username,
            password: config().database.password,
            database: config().database.name,
            entities: [__dirname + '/../**/*.entity.{js,ts}'],
            synchronize: true,
        }
    }
}

export const configDBService = new ConfigDBService();