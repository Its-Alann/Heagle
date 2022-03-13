import React from "react";
import './SellerProducts.css'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {Button, Container, Row, Col} from 'react-bootstrap'
import Axios from "axios";

const SellerProducts = ({ match }) => {

  const pageId = useParams(); 
  
  const [selectedProductName, setName ]= useState("");
  const [selectedProductDescription, setDescription ]= useState("");
  const [selectedProductPrice, setPrice ]= useState("");
  const [selectedProductImageUrl, setImageUrl ]= useState("");
  const [userProducts, setUserProducts ]= useState([]);

  useEffect(()=> {
      // const getProductFromServer = "https://heagle-backend.herokuapp.com/getProduct/" + pageId.id
      // Use this const below for when you code in local, comment it out once done
      // const getProductFromServer = "http://localhost:3001/getSellerProducts/" + pageId.id 
      // Axios.get(getProductFromServer).then((response) => {
      //     setUserProducts(response.data);
      //     // setName(response.data[0].name);
      //     // setDescription(response.data[0].description);
      //     // setImageUrl(response.data[0].imageUrl);
      //     // setPrice(response.data[0].price);
      //   });
  }, []);


  const getUserProducts = () => {
    const getProductFromServer = "http://localhost:3001/getSellerProducts/"  + pageId.id
    Axios.get(getProductFromServer).then((response) => {
      // console.log(response.data)
      setUserProducts(response.data);
    });
  };

  return (
      <Container className="single-product">
        <button onClick={getUserProducts}>Show My Product(s)</button>

        {/* 
        Issue:
        - Render product list: rendering list & refresh page disappear on click event ?
         */}

         {/* Loop: from: https://www.youtube.com/watch?v=JG1Bc-uj5jI */}
        {
          userProducts.length > 0 ? userProducts.map((product, idx) => {
            return (
            <p key={idx}>{product.name}, {product.price}</p>
            
            
            );
          }) 
          : ''
    
        }

        {/* render product list */}

        {/* {userProducts.map((product) => { */}
          {/* return (  */}
          
            <Row>
              <Col Col lg={true} className="align-self-center">
                  {/* Product Image */}
                  <div className="row-md-6 single-image">
                    {/* <img src={product.imageUrl} className = "img-fluid" alt={product.name} /> */}
                  </div>
              </Col>
    
              <Col Col lg={true}>
                <div className="product-dtl bg-light">
                  {/* Product Name */}
                  {/* <div className="product-name">{product.name}</div> */}
                  
                  {/* Product Description */}
                  <div className="SingleProductDescription">
                    {/* <p>{product.description}</p> */}
                  </div>
    
                  <div className="p-3 shadow-sm rounded">
                    {/* Product Price */}
                    {/* <div className="product-count">${product.price}</div> */}
    
                    {/* Product Quantity */}
                    <Row className="justify-content-md-center">
                      <div className="quantity">
                        {/* <p className="alert">Quantity: {product.quantity}</p> */}
                      </div>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col Col lg={true} className="align-self-center SellerButtons">
                  {/* Edit/Remove Buttons */}
                  <Row className="SellerEditButton justify-content-center">
                    <button>Edit</button>
                  </Row>
                  <Row className="SellerRemoveButton justify-content-center">
                  <button >Remove</button>
                  </Row>
              </Col>
          </Row>
        {/* );  */}
        {/* })}  */}
      </Container>
  );
};
export default SellerProducts;