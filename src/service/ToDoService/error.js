const { StatusCodes } = require('http-status-codes');
const createDefaultError = require('../../helper/createDefaultError');

module.exports = {
  invalidId: () => createDefaultError({
    status: StatusCodes.BAD_REQUEST,
    message: 'Invalid id format',
  }),

  notFound: () => createDefaultError({
    status: StatusCodes.NOT_FOUND,
    message: 'recipe not found',
  }),

};
