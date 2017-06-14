'use strict';

// TODO: create an `index.js` that calls your function with three paths from process.argv
//   and then logs the contents of the three files to the screen
//   TODO: (your console.log should be  in the index.js file not in your print-files function)

const fs = require('fs');
const pf = require('./lib/print-files.js');
const index = module.exports = {};

index.main = () => {

  let paths = ['./data/test1.txt'];

  let result =
  pf.printFiles(paths);
  // fs.readFile('./data/test1.txt', (err, data) => {
  //     if(err)
  //       return console.error(err);
  //     console.log(data.toString());
  //   });

  console.log('I\'m reading, can you wait a millisecond?');
  console.log(result);
  return result;
};

index.main();


// TODO:  Write tests that guarantee that the files are logged in order.
// TODO:  You will also need to look up and implement async testing, making sure that you are not getting "false positives" (tests that are passing but shouldn't be).
//   TODO:  hint read mocha docs
