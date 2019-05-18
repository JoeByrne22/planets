function secureRoute(req, res, next) {
  if (req.session.userId) {
    next();
  } else {
    console.log('DENIED');
    res.redirect('/login');
  }
}

module.exports = secureRoute;
