-- Dummy table --
DROP TABLE IF EXISTS dummy;
CREATE TABLE dummy(created TIMESTAMP WITH TIME ZONE);

-- Your database schema goes here --
DROP TABLE IF EXISTS Person CASCADE;

CREATE TABLE Person(userID UUID UNIQUE PRIMARY KEY DEFAULT gen_random_uuid(), data jsonb, streamingServices jsonb);