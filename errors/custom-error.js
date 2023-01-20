const { StatusCodes } = require('http-status-codes');

class CustomError extends Error {
  constructor() { 
    super(message)
  }
}

module.exports = CustomError;

