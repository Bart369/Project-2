const db = require('../db/config.js');

const Shows = {};

Shows.findAll = () => {
  return db.query('SELECT * FROM favorites') //join to get user id?
};

Shows.create = (favorites, userid) => {
  return db.one(`
  INSERT INTO favorites (
  name,
  description,
  first_air_date,
  posterpath,
  showcodeid,
  userid
  ) VALUES (
  $1,
  $2,
  $3,
  $4,
  $5,
  $6
  )
  Returning *`,
  [favorites.name, favorites.description, favorites.first_air_date, favorites.posterpath, favorites.showcodeid, userid])
}

Shows.delete = id => {
  return db.none(
    `DELETE FROM favorites WHERE id = $1`, [id])
}

module.exports = Shows;
