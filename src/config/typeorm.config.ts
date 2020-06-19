import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import * as config from 'config';

const dbConfig = config.get('db');
class ConfigDBService {

    public getTypeOrmConfig(): TypeOrmModuleOptions {
        return {
            type: dbConfig.type,
            host: process.env.DB_URL || dbConfig.host,
            port: process.env.DB_PORT || dbConfig.port,
            username: process.env.DB_USERNAME || dbConfig.username,
            password: process.env.DB_PASSWORD || dbConfig.password,
            database: process.env.DB_DBNAME || dbConfig.database,
            entities: [__dirname + '/../**/*.entity.{js,ts}'],
            synchronize: dbConfig.synchronize,
        }
    }
}

export const configDBService = new ConfigDBService();