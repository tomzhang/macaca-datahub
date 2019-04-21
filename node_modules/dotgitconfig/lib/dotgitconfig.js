'use strict';

const fs = require('fs');
const ini = require('ini');
const path = require('path');

const format = data => {
  var res = {};
  Object.keys(data).forEach(k => {
    if (!!~k.indexOf('"')) {
      var arr = k.split('"');
      var mainkey = arr.shift().trim();
      var childkey = arr.shift().trim();

      if (!res[mainkey]) {
        res[mainkey] = {};
      }
      res[mainkey][childkey] = data[k];
    } else {
      res[k] = data[k];
    }
  });
  return res;
};

module.exports = (dir, cb) => {
  const filePath = path.resolve(dir || process.env.GIT_DIR, '.git', 'config');
  const isExisted = fs.existsSync(filePath) && fs.statSync(filePath).isFile();

  if (!isExisted) {
    new Error(`no gitconfig to be found at ${dir}`);
  }
  const content = fs.readFileSync(filePath, 'utf8');

  return format(ini.parse(content));
};
