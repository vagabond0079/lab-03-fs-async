//  it should have a function signature (paths, callback) => undefined
// TODO:  expect the callback function signature to be (err, data) => undefined

const printFiles = module.exports = {};

printFiles = (paths, (err, data)) => undefined;

// TODO:  read the three files in order
// TODO:  on success pass an array of the contents of the files the data param of the callback `callback(null, data)`
// TODO:  on failure pass and error in to the callback `callback(err)`
