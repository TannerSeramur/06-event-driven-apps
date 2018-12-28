'use strict';
const {saved,error} = require('./events');

const logger = module.exports = exports = {};

  logger.saved = (payload) => {
    if(payload){
      console.log(`File Saved ${payload}`); 
    }
  }

  logger.err = (payload) => {
    if(payload){
      throw new Error(payload);
    }
  }

  saved.on('saved', logger.saved);
  error.on('error', logger.err);




