import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import { Container } from "react-bootstrap";
import {Button, Row, Col} from 'react-bootstrap'
import './SellerProducts.css'


const SellerProducts = (props) => {

    const pageId = useParams();

    const [userProducts, setUserProducts ]= useState([]);


    useEffect(()=> {
        // window.location.reload(false)

        const getProductFromServer = "http://localhost:3001/getSellerProducts/"  + pageId.id
        Axios.get(getProductFromServer).then((response) => {
            console.log("alice: products from db: ")
          console.log(response.data)
          setUserProducts(response.data);

        });
    }, []);

        return(
        <Container>
        {
            userProducts.length > 0 ? 
            userProducts.map((product, idx) => (

                <Row>
                  <Col Col lg={true} className="align-self-center">
                      {/* Product Image */}
                      <div className="row-md-6 single-image">
                        <img src={product.imageUrl} className = "img-fluid" alt={product.name} />
                      </div>
                  </Col>
                
                  <Col Col lg={true}>
                    <div className="product-dtl bg-light">
                      {/* Product Name */}
                      <div className="product-name">{product.name}</div>
                      
                      {/* Product Description */}
                      <div className="SingleProductDescription">
                        <p>{product.description}</p>
                      </div>
                
                      <div className="p-3 shadow-sm rounded">
                        {/* Product Price */}
                        <div className="product-count">${product.price}</div>
                
                        {/* Product Quantity */}
                        <Row className="justify-content-md-center">
                          <div className="quantity">
                            <p className="alert">Quantity: {product.quantity}</p>
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
                
            )) 
             : console.log("Seller has no product")
      

          }

        </Container>
    );

}

export default SellerProducts