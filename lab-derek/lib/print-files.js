'use strict';

const fs = require('fs');

const pf = module.exports = {};

pf.printFiles = (paths, callback) =>
  fs.readFile(paths[0], (err, data) => {
      callback(err, data);
    fs.readFile(paths[1], (err, data) => {
      callback(err, data);
      fs.readFile(paths[2], (err, data) => {
        callback(err, data);
      });
    });
  });
