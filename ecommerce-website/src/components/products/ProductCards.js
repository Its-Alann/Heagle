import Axios from "axios";
import React from "react";
import { Card, Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Products.css";

export default class ProductCards extends React.Component {
	state = {
		products: [],
	};

	componentDidMount() {
		Axios.get("http://localhost:3001/fetchProductList").then((res) => {
			this.setState({ products: res.data });
		});
	}
	render() {
		const listItems = this.state.products.map((item) => (
			<div className="card" key={item.id}>
				<Link
					to={`/${item.type}/${item.id}`}
					style={{ textDecoration: "none" }}
				>
					<div className="card-img">
						<img src={item.imageUrl} className="image" alt="" />
					</div>
				</Link>
				<div className="card-header">
					<Card.Body>
						<Link
							to={`/${item.type}/${item.id}`}
							style={{ textDecoration: "none" }}
						>
							<Card.Title className="card-title"> {item.name} </Card.Title>
						</Link>
						<Card.Text className="card-text"> {item.description} </Card.Text>
						<Card.Text className="card-price">
							{" "}
							{item.price}
							{item.currency}{" "}
						</Card.Text>
						<div className="button">
							<Button className="btn"> Add to Card </Button>
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
	}
}

async function fetchProductListFromDbDev() {
	const products = await Axios.get(
		"http://localhost:3001/fetchProductList"
	).then((res) => {
		return res.data;
	});
	console.log(products);
	return products;
}
