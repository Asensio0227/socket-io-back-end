const BadRequestError = require('./bad-request');
const NotFoundError = require('./not-found');
const CustomError = require('./custom-error');
const UnauthenticatedError = require('./unauthenticated');

module.exports = {
  BadRequestError,
  NotFoundError,
  CustomError,
  UnauthenticatedError,
}