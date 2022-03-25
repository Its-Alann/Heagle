import React from "react";
import "./Products.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import baseUrl from "../../SystemVariables";
import Axios from "axios";

const IndividualProductPage = ({ match }) => {
	const pageId = useParams();

	const [selectedProductName, setName] = useState("");
	const [selectedProductDescription, setDescription] = useState("");
	const [selectedProductPrice, setPrice] = useState("");
	const [selectedProductImageUrl, setImageUrl] = useState("");

	useEffect(() => {
		const getProductFromServer =baseUrl+ "/getProduct/" + pageId.id;
		Axios.get(getProductFromServer).then((response) => {
			setName(response.data[0].name);
			setDescription(response.data[0].description);
			setImageUrl(response.data[0].imageUrl);
			setPrice(response.data[0].price);
		});
	}, []);

	return (
		<Container className="single-product">
			<Row>
				<Col className="align-self-center">
					{/* Product Image */}
					<div className="row-md-6 single-image">
						<img
							src={selectedProductImageUrl}
							className="img-fluid"
							alt={selectedProductName}
						/>
					</div>

					{/* Product Description */}
					<div className="row-md-6 SingleProductDescription">
						<p>{selectedProductDescription}</p>
					</div>
				</Col>

				<Col>
					<div className="row-md-6 product-dtl">
						{/* Product Name */}
						<div className="product-name bg-light">{selectedProductName}</div>

						<div className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded">
							{/* Product Price */}
							<div className="product-count">${selectedProductPrice}</div>

							{/* Product Status */}
							{/* <div className="alert mt-3">
                    <h6>Status</h6>
                    <span>In Stock</span>
                  </div> */}

							{/* Product Quantity */}
							<Row className="justify-content-md-center">
								<div className="col-md-4 d-flex justify-content-center">
									<button className="qty-button">-</button>
								</div>

								<div className="col-md-4 quantity ">
									<p className="alert">1</p>
								</div>

								<div className="col-md-4 d-flex justify-content-center">
									<button className="qty-button">+</button>
								</div>
							</Row>

							<div className="alert mt-3">
								<button className="SingleProductAddCartButton">
									Add To Cart
								</button>
							</div>
						</div>
					</div>

					{/* Product Review(s) */}
					<div className="row-md-6">
						<h6 className="mb-3">REVIEW(S)</h6>
						<div className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded">
							<strong>John Doe</strong>
							<span> Feb 17 2022</span>
							<div className="alert alert-info mt-3">
								Yes, I would recommend this to a friend.
							</div>
						</div>
					</div>

					{/* Product - Add a Review (Additional Feature) */}
					{/* <div className="col-md-6">
              <h6>WRITE A CUSTOMER REVIEW</h6>
              <div className="my-4"></div>
              <form>
                <div className="my-4">
                  <strong>Comment</strong>
                  <textarea
                    row="3"
                    className="col-12 bg-light p-3 mt-2 border-0 rounded"
                  ></textarea>
                </div>
                <div className="my-3">
                  <button className="col-12 bg-black border-0 p-3 rounded text-white">
                    SUBMIT
                  </button>
                </div>
              </form>
            </div> */}
				</Col>
			</Row>
		</Container>
	);
};
export default IndividualProductPage;
