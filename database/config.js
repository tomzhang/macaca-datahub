'use strict';

// const path = require('path');
// const _ = require('xutil');
//
// const databasePath = path.join(process.env.HOME, '.macaca-datahub');
// _.mkdir(databasePath);

module.exports = {
  dialect: 'mysql',
    database: 'datahub',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: '123456',
    timezone: '+08:00', // 东八时区
};
