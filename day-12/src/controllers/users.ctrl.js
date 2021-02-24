

function list(req, res) {
  res.json([]);
}

function create(req, res, next) {
  if (!req.body.email) {
    return next(new error('email isnot spec'))
  }
}

module.exports = {
  list,
  create,
};
