const express = require("express"); //Imports express
const app = express();
const cors = require('cors');
const { db } = require("./db");

app.use(cors());
app.use(express.json());

app.get("/product", (req, res) => {
	res.send("Hello World!");
	db.query("SELECT * FROM ")
});

const PORT = process.env.PORT || 3001;
app.listen(PORT);
