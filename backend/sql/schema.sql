-- Dummy table --
DROP TABLE IF EXISTS dummy;
CREATE TABLE dummy(created TIMESTAMP WITH TIME ZONE);

-- Your database schema goes here --
DROP TABLE IF EXISTS Person CASCADE;
DROP TABLE IF EXISTS InitialMovies CASCADE;

CREATE TABLE Person(userID UUID UNIQUE PRIMARY KEY DEFAULT gen_random_uuid(), data jsonb, streamingServices jsonb, first_login INT DEFAULT 1);
CREATE TABLE InitialMovies(movieID UNIQUE PRIMARY KEY DEFAULT VARCHAR(50) NOT NULL, moviename varchar (50) NOT NULL)