import Axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Card, Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Products.css";
import productDatabase from "./productDatabase.js";
import baseUrl from "../../SystemVariables";

const ProductLoader = (props) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const url = baseUrl + "/fetchProductList";
		try {
			Axios.get(url) //use the devUrl variable in the Axios request when working on local server.
				.then((res) => {
					res.data.forEach((element) => {
						productDatabase.push(element);
					});
				})
				.then(() => {
					props.update((props.updateValue + 1)%100);
					console.log("productsUpdate");
				}); //Updates the App component state 'update', which causes it to re-render after the request has been made.
		} catch (error) {}
		//productDatabase = productDatabase.concat(products);
		console.log(productDatabase);
	}, []);

	return null;
};

export default ProductLoader;
