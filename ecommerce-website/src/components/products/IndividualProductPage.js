import React from "react";
import './Products.css'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {Button, Container, Row} from 'react-bootstrap'


import Axios from "axios";

const IndividualProductPage = ({ match }) => {

  const pageId = useParams(); 

  const [selectedProductName, setName ]= useState("");
  const [selectedProductDescription, setDescription ]= useState("");
  const [selectedProductPrice, setPrice ]= useState("");
  const [selectedProductImageUrl, setImageUrl ]= useState("");

  useEffect(()=> {
      const getProductFromServer = "https://heagle-backend.herokuapp.com/getProduct/" + pageId.id
      // Use this const below for when you code in local, comment it out once done
      //const getProductFromServer = "http://localhost:3001/getProduct/" + pageId.id  
      Axios.get(getProductFromServer).then((response) => {
        setName(response.data[0].name);
          setDescription(response.data[0].description);
          setImageUrl(response.data[0].imageUrl);
          setPrice(response.data[0].price);
        });
  }, []);

  return (
    <>
      <Container>
      <div className="single-product">
        <Row>
          <div className="col-md-6">
            <div className="single-image">
              <img src={selectedProductImageUrl} alt={selectedProductName} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="product-dtl">
              <div className="product-info bg-light">
                <div className="product-name bg-light">{selectedProductName}</div>
              </div>
              <div>
                <div className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded">
                  {/* <h6>Price</h6> */}
                  <span>${selectedProductPrice}</span>
                  <div className="alert  mt-3">
                    <h6>Status</h6>
                    <span>In Stock</span>
                  </div>
                  <div className="alert  mt-3">
                    <button className="SingleProductButton">Add To Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>

          {/* RATING */}
        <Row>
          <div className="col-md-6 SingleProductDescription">
            <p>{selectedProductDescription}</p>
          </div>
          <div className="col-md-6">
            <h6 className="mb-3">REVIEW(S)</h6>
              <div className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded">
                <strong>John Doe</strong>
                <span> Feb 17 2022</span>
                <div className="alert alert-info mt-3">
                  Yes, I would recommend this to a friend.
                </div>
              </div>
          </div>
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
        </Row>
      </div>
      </Container>
    </>
  );
};
export default IndividualProductPage;