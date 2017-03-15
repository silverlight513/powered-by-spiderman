module.exports = (req, res, next) => {
  res.header('X-powered-by', 'Your friendly neighbourhood spiderman');
  next();
};