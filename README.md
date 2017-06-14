![cf](https://i.imgur.com/7v5ASc8.png) lab-03-fs-readfile
======


## To Submit this Assignment
  * fork this repository
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Configuration
* README.md
* .gitignore
* .eslint
* .eslintrc
* .package.json

## Description:
* create module `lib/print-files` with a function that takes an array of three filepaths and a callback 
  * it should have a function signature (paths, callback) => undefined
  * the callback should have the function signature (err, data) => undefined
  * read the three files in order 
  * on success pass an array of the contents of the files in the same order as the paths into the callback 
  * on failure pass and error in to the callback
* create an index.js that calls your function with three paths from process.argv
  and then loggs the contents of the three files to the screen
  * (your console.log should be  in the index.js file not in your print-files function)

# Documentation
* Write a description on your code in your readme

## Bonus
* You will need to write tests that guarantee that the files are logged in order.
* You will also need to look up and implement async testing, making sure that you are not getting "false positives" (tests that are passing but shouldn't be).
  * hint read mocha docs    


