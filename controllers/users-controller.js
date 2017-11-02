const bcrypt = require('bcryptjs');
const User = require('../models/user.js');

const usersController = {};

usersController.index = (req, res) => {
  User.findUserFavorites(req.user.id)
    .then(favorites => {
      res.json({
        message: 'Put a user profile page on this route',
        data: {
          user: req.user,
          favorites: favorites
        },
    });
  }).catch(err => {
      console.log(err);
      res.status(500).json({error:err})
  });
};

usersController.create = (req, res) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  User.create({
    username: req.body.username,
    email: req.body.email,
    password_digest: hash,
  }).then(user => {
    req.login(user, (err) => {
      if (err) return next(err);
      res.redirect('/shows/favorites');
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
}

module.exports = usersController;
