-- Dummy table --
DROP TABLE IF EXISTS dummy;
CREATE TABLE dummy(created TIMESTAMP WITH TIME ZONE);

-- Your database schema goes here --
DROP TABLE IF EXISTS person CASCADE;

CREATE TABLE dummy(created TIMESTAMP WITH TIME ZONE);
CREATE TABLE person(userID UUID UNIQUE PRIMARY KEY DEFAULT gen_random_uuid(), data jsonb);