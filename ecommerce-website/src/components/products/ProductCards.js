import { React, useState, useEffect } from "react";
import { Card, Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Products.css";
import productDatabase from "./productDatabase";
import { useLocation } from "react-router-dom";

const ProductCards = () => {
	//Finds the category of the page using the url
	const pageCategory = useLocation().pathname;
	//console.log(pageCategory);

	const listItems = productDatabase
		.filter((item) => {
			if (pageCategory !== "/home") {
				return "/" + item.type === pageCategory;
			}
			return item;
		})
		.map((item) => (
			<div className="card" key={item.id}>
				<Link
					to={`/${item.type}/${item.id}`}
					style={{ textDecoration: "none" }}
				>
					<div className="card-img">
						{/* <img src={item.imageUrl} className="image" alt="" /> */}
					</div>
				</Link>
				<div className="card-header">
					<Card.Body>
						<Link
							to={`/${item.type}/${item.id}`}
							style={{ textDecoration: "none" }}
						>
							<Card.Img className="image" src={item.imageUrl} alt={item.name} />
							<Card.Title className="card-title"> {item.name} </Card.Title>
						</Link>
						<Card.Text className="card-text"> {item.description} </Card.Text>
						<Card.Text className="card-price">
							{" "}
							${item.price}
							{item.currency}{" "}
						</Card.Text>
						<div className="button">
							<Button className="btn"> Add to Cart </Button>
						</div>
					</Card.Body>
				</div>
			</div>
		));

	return (
		<div>
			<Container>
				<Row xs={2} md={4}>
					{listItems}
				</Row>
			</Container>
		</div>
	);
};

export default ProductCards;
