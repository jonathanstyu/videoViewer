DROP DATABASE IF EXISTS movies;
CREATE DATABASE movies;

\c movies;

CREATE TABLE movies (
  entry JSONB
);

INSERT INTO movies
  VALUES ('{"title": "Movie1", "description": "Movie are like this"}');
