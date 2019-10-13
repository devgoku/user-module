const User = require('../models/user');

exports.getUsers = (req, res, next) => {
    User.find()
    .then(users => {
      res.status(200).json({
        message: 'Fetched users list successfully.',
        users: users
      });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

