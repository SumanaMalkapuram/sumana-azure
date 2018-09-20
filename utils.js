const _ = require('lodash');

module.exports = function hasScope(scopes) {

  return function(req, res, next) {
    if (_.intersection(req.user.scopes, scopes).length !== scopes.length) {
      res.statusCode = 403;
      res.end('Forbidden due to missing scope');
    }
    next();
  }
}