import { Sequelize } from 'sequelize-typescript';
import models from './models';

import accessEnv from '#root/helpers/accessEnv';

const DB_URL = accessEnv('DB_URL');

const sequelize = new Sequelize(DB_URL, {
  dialectOptions: {
    charset: 'utf8',
    multipleStatements: true,
  },
  logging: false,
  models,
});

export default sequelize;
