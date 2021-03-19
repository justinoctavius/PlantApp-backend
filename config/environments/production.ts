import * as dotenv from 'dotenv';
dotenv.config();

export default {
  PORT: process.env.PORT || 8080,
  PLANTS_API: process.env.PLANTS_API,
  ADMIN: {
    ADMIN_USERNAME: process.env.ADMIN_USERNAME,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
    ADMIN_EMAIL: process.env.ADMIN_EMAIL,
  },
  DB: {
    POSTGRES_HOST: process.env.POSTGRES_HOST,
    POSTGRES_PORT: process.env.POSTGRES_PORT,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    POSTGRES_USER: process.env.POSTGRES_USERNAME,
    POSTGRES_DATABASE: process.env.POSTGRES_DATABASE,
  },
};
