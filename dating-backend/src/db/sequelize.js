const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'postgres',
  },
);

const models = {
  User: sequelize.import('../models/User'),
  Dialog: sequelize.import('../models/Dialog'),
  Message: sequelize.import('../models/Message'),
  DialogMember: sequelize.import('../models/DialogMember')
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

module.exports = {
  sequelize,
  ...models
};