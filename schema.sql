DROP DATABASE IF EXISTS "estate_management";

CREATE DATABASE "estate_management";

\c "estate_management"


CREATE TABLE users (
username VARCHAR(25) PRIMARY KEY NOT NULL,
email TEXT UNIQUE NOT NULL CHECK (position('@' IN email) > 1), 
firstname TEXT,
lastname TEXT,
first_property TEXT NOT NULL,
second_property TEXT,
third_property TEXT, 
password TEXT NOT NULL, 
created_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
is_admin BOOLEAN DEFAULT FALSE);
                    
CREATE TABLE issues (id SERIAL PRIMARY KEY, 
                       title TEXT NOT NULL, 
			created_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
			property TEXT,
			description TEXT NOT NULL,
			username TEXT NOT NULL REFERENCES users ON DELETE CASCADE,
			status TEXT DEFAULT 'open',
			category TEXT

);

CREATE TABLE issue_history (
id SERIAL PRIMARY KEY,
issue_ref INTEGER NOT NULL REFERENCES issues ON DELETE CASCADE,
update_by TEXT NOT NULL,
created_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
description TEXT
);








