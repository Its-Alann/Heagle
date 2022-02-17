const mySql = require('mysql')

const db = mySql.createPool({
	host: "l6glqt8gsx37y4hs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	user: "w3e8oegzwefulssk",
	password: "eno5b8w3kezdfqn2",
	database: "e5zkwad79wtbvjrc"
})

module.exports = {db}; //Exports the db.js file as a module so that other .js files in the server can use const db