const db = require('../db/config.js');

const Shows = {};

Shows.create = show => db.one(`
  INSERT INTO shows (
  name,
  description,
  first_air_date,
  posterPath,
  showcodeid
  ) VALUE (
  $/name/,
  $/description/,
  $/first_air_date/,
  $/posterPath/,
  $/showcodeid/
  )
  Returning *`,
  show)

module.exports = Shows;
