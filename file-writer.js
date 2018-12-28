'use strict';

const util = require('util');
const fs = require('fs');
const {saved,error} = require('./events');
const logger = require('./logger');

const readFile = util.promisify(fs.readFile);

  const alterFile = (file) => {
    readFile(file)
    .then((data) => {
    let text = data.toString().toUpperCase();
    fs.writeFile( file, Buffer.from(text), (err, data) => {
      saved.emit('saved',file);
    });
    }).catch((err) => error.emit('error',err));
  };

let file = process.argv.slice(2).shift();
alterFile(file);

module.exports = alterFile;