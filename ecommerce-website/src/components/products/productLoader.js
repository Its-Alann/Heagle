import Axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Card, Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Products.css";
import productDatabase from "./productDatabase.js";

const ProductLoader = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const url = "https://heagle-backend.herokuapp.com/fetchProductList";
		const devUrl = "http://localhost:3001/fetchProductList";
		try {
			Axios.get(devUrl) //use the devUrl variable in the Axios request when working on local server.
				.then((res) => {
					res.data.forEach(element => {
						productDatabase.push(element);
					});
				});
		} catch (error) {}
		//productDatabase = productDatabase.concat(products);
		console.log(productDatabase);
	}, []);

	return null;
};

export default ProductLoader;
