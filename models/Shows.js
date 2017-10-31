const db = require('../db/config.js');

const Shows = {};

Shows.findAll = () => {
  return db.query('SELECT * FROM shows')
};

Shows.create = show => db.one(`
  INSERT INTO shows (
  name,
  description,
  first_air_date,
  posterPath,
  showcodeid
  ) VALUES (
  $/name/,
  $/description/,
  $/first_air_date/,
  $/posterPath/,
  $/showcodeid/
  )
  Returning *`,
  show)

Shows.delete = id => {
  return db.none(
    `DELETE FROM shows WHERE id = $1`, [id])
}

module.exports = Shows;
