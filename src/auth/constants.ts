import * as config from 'config';

const jwtConfig = config.get('jwt');

export const jwtConstants = {
    secret: process.env.JWT_SECRET || jwtConfig.secret,
    expiresIn: jwtConfig.expiresIn,
  };