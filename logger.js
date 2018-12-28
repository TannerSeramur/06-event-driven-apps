'use strict';
const {saved,error} = require('./events');

saved.on('saved', savedd);


error.on('error', errorr);

  function savedd(file){
    console.log(`${file} saved`);
    return `saved`;
  }
  function errorr(err){
    console.error(`whoops! we have a error: ${err}`);
  }

module.exports = {saved, error};


