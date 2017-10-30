DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL
)


DROP TABLE IF EXISTS shows;
CREATE TABLE IF NOT EXISTS shows(
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  description VARCHAR,
  first_air_date VARCHAR,
  posterPath VARCHAR,
  showcodeid INTEGER
)


DROP TABLE IF EXISTS favorites;
CREATE TABLE IF NOT EXISTS favorites(
  id SERIAL PRIMARY KEY,
  showcodeid INTEGER,
  userid INTEGER,
  name VARCHAR,
  description VARCHAR,
  posterPath VARCHAR
)
