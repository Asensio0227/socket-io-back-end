const { StatusCodes } = require('http-status-codes');
const CustomError = require('./custom-error');


class UnauthenticatedError extends CustomError {
  constructor() {
    super(message)
    this.code = StatusCodes.UNAUTHORIZED;
  };
};

module.exports = UnauthenticatedError;