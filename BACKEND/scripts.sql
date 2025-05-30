// Create the table for the User database
-- This table will store user information including email, name, and contact details

CREATE TABLE tbluser (
	id SERIAL NOT NULL PRIMARY KEY,
	email VARCHAR(120) UNIQUE NOT NULL,
	firstname VARCHAR(50) NOT NULL,   -- First name of the user is changed to 'firstname'
	lastname VARCHAR(50),             -- Last name of the user is changed to 'lastname'
	contact VARCHAR(15),
	accounts TEXT[],
	password TEXT,
	provider VARCHAR(10) NULL,
	country TEXT,
	currency VARCHAR(5) NOT NULL DEFAULT 'USD',
	createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

// Create the table for the Account database
-- This table will store user accounts with their details

CREATE TABLE tblaccount (
	id SERIAL NOT NULL PRIMARY KEY,
	user_id INTEGER NOT NULL REFERENCES tbluser(id),
	account_name VARCHAR(50) NOT NULL,
	account_number VARCHAR(50) NOT NULL,
	account_balance NUMERIC(10, 2) NOT NULL,
	createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

// Create the table for the Transaction database
-- This table will store transaction details including user ID, description, status, source, amount, and type

CREATE TABLE tbltransaction(
	id SERIAL NOT NULL PRIMARY KEY,
	user_id INTEGER NOT NULL REFERENCES tbluser(id),
	description TEXT NOT NULL,
	status VARCHAR(10) NOT NULL DEFAULT 'Pending',
	source VARCHAR(100) NOT NULL,
	amount NUMERIC(10, 2) NOT NULL,
	type VARCHAR(10) NOT NULL DEFAULT 'income',
	createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);