const express = require("express"); //Imports express
const app = express();
const cors = require('cors')
const mySql = require('mysql')
const db = require('./db');

app.use(cors());
app.use(express.json()); 

//connect to mysql
app.listen(8080, () => {
	// console.log("Server in running on part 3001")
})

app.get("/getProduct/:id", (req, res) => {
	const searchId = req.params.id;
	const sqlQuery = "SELECT * FROM e5zkwad79wtbvjrc.products WHERE id='" + searchId + "'"
	db.query(sqlQuery, (err, results) => {
	if(err) {
		throw err
	} else {
		res.send(results);
	}
  	}) 
})

// const PORT = process.env.PORT || 3001;
// app.listen(PORT);