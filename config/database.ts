import { Sequelize } from 'sequelize-typescript';
import config from '.';

let sequelize;

const connect = async () => {
  //database
  const dbConfig: any = {
    host: config.env.DB.POSTGRES_HOST,
    dialect: 'postgres',
    username: config.env.DB.POSTGRES_USER,
    password: config.env.DB.POSTGRES_PASSWORD,
    database: config.env.POSTGRES_DATABASE,
    models: [__dirname + './../src/dal/models'],
  };
  sequelize = new Sequelize(dbConfig);

  await sequelize.sync({ force: false }).catch((err) => console.log(err));
  testConnection();
};

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database is connected');
  } catch (error) {
    console.log('Unable to connect to the database');
  }
};

export { sequelize, connect };
