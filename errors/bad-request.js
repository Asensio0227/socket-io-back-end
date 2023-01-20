const { StatusCodes } = require('http-status-codes');
const CustomError = require('./custom-error');

class BadRequestError extends CustomError {
  constructor() {
    super(message)
    this.code=StatusCodes.BAD_REQUEST
  };
};

module.exports = BadRequestError;
