const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
	user:"w3e8oegzwefulssk",
	password: "eno5b8w3kezdfqn2",
	host: "l6glqt8gsx37y4hs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	database: "e5zkwad79wtbvjrc"
});

var insertQuery = 
	`INSERT INTO e5zkwad79wtbvjrc.users (email, password) 
	VALUE('test@email.com', 'testPwd');`;	


app.get("/", (req, res)=>{
	
	db.query(insertQuery, (err, result)=>{
		res.send("User successfully inserted in the database");    //Prints a string to the web page
		console.log("User successfully inserted in the database"); //Prints a string in the console
	})
});

app.listen(3001, ()=> {

	console.log("running on port 3001");
	
	});



