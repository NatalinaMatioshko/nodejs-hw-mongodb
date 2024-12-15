export const ctrlWrapper = (controller) => {
  return async (rec, res, next) => {
    try {
      await controller(rec, res, next);
    } catch (err) {
      next(err);
    }
  };
};
