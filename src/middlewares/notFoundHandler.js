import createHttpError from 'http-errors';

export const notFoundHandler = (rec, res, next) => {
  next(createHttpError(404, 'Route not found'));
};
