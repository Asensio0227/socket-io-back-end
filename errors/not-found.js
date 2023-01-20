const { StatusCodes } = require('http-status-codes');
const CustomError = require('./custom-error');

class NotFoundError extends CustomError {
  Constructor() {
    super(message)
    this.code = StatusCodes.NOT_FOUND;
  };
};

module.exports = NotFoundError;