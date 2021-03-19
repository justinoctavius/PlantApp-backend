import * as dotenv from 'dotenv';
dotenv.config();

export default {
  PORT: process.env.PORT || 8080,
  PLANTS_API: process.env.PLANTS_API,
  JWT_SECRECT: process.env.JWT_SECRECT,
  ADMIN: {
    ADMIN_USERNAME: process.env.ADMIN_USERNAME,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
    ADMIN_EMAIL: process.env.ADMIN_EMAIL,
  },
  DB: {
    POSTGRES_HOST: process.env.POSTGRES_HOST || 'localhost',
    POSTGRES_PORT: process.env.POSTGRES_PORT || 5432,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || '123',
    POSTGRES_USER: process.env.POSTGRES_USERNAME || 'postgres',
    POSTGRES_DATABASE: process.env.POSTGRES_DATABASE || 'plant_test',
  },
};
