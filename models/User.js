const db = require('../db/config');

const User = {};

User.findByUserName = userName => {
  return db.oneOrNone(`
    SELECT * FROM users
    WHERE username = $1
  `, [userName]);
};

User.accessAllUsers = () => {
  return db.oneOrNone(`SELECT * FROM users`);
};

User.create = user => {
  return db.one(`
    INSERT INTO users
    (username, email, password_digest)
    VALUES ($1, $2, $3)
    RETURNING *
  `, [user.username, user.email, user.password_digest]);
};

User.findUserFavorites = id => {
  return db.manyOrNone(`
    SELECT * FROM favorites
    WHERE username = $1
  `, [id]);
};

module.exports = User;
