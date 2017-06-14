'use strict';

const fs = require('fs');
const pf = require('./lib/print-files.js');
const index = module.exports = {};

index.main = () => {
  let paths = process.argv.splice(2);
  pf.printFiles(paths, (err, data) => {
    if(err)
      console.log(err);
    console.log(data.toString());
  });
};

index.main();


// TODO:  Write tests that guarantee that the files are logged in order.
// TODO:  You will also need to look up and implement async testing, making sure that you are not getting "false positives" (tests that are passing but shouldn't be).
//   TODO:  hint read mocha docs
