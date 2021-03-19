import { Sequelize } from 'sequelize-typescript';
import config from '.';

//database
const dbConfig: any = {
  host: config.env.DB.POSTGRES_HOST,
  dialect: 'postgres',
  username: config.env.DB.POSTGRES_USER,
  password: config.env.DB.POSTGRES_PASSWORD,
  database: config.env.POSTGRES_DATABASE,
  models: [__dirname + './../src/dal/models'],
};

export const sequelize = new Sequelize(dbConfig);

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database is connected');
  } catch (error) {
    console.log('Unable to connect to the database');
  }
};

testConnection();
// sequelize.sync({ force: true }).catch((err) => console.log(err));
