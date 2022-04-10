import React from 'react'
import './ShoppingCart.css'
import {Card, Button, Container, Row, Col} from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import Axios from "axios";
import baseUrl from "../../SystemVariables";

const ShoppingCart = () => {

    const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
    const [cart] = useState(cartFromLocalStorage);
    const userId = JSON.parse(localStorage.getItem("user")|| "[]").id ;

    const updateCartDb = (response)=>{
        var apiUrl;
        if(response === undefined){
            console.log("undefined");
            apiUrl="/createCart";
        }
        else{
            console.log("defined");
            apiUrl="/updateCart";
        }
        
        console.log(apiUrl);
        Axios.post(baseUrl+apiUrl,{
            userId: userId,
            cartContent: localStorage.getItem("cart")
        });
    }
    useEffect(()=>{
        if(userId){
            Axios.get(baseUrl + "/getCart/"+ userId).then((res)=>{
                updateCartDb(res.data[0]);
                }
            )
        }
    }, [])
    
    return(
        <div className="page">
            <Row>
            <div className="shoppingcart-block">
            
                <div className="shoppingcart-block-top">        
                    <h3>Shopping Cart</h3>
                </div>
                
                <div className="shoppingcart-block-center">
                <Row>
                    <Col>
                    
                        <div id="shoppingcart-block-center-left">
                        {/* temporary */}
                            <h1>left</h1>

                            <Container Style="padding:20px 0px">
                            {
                                cart.length > 0 ? 
                                cart.map((product, idx) => (

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

                                    
                                    </Row>
                                    
                                )) : <div className="retryBtn"><h1>in else statement</h1></div>
                            }
                            </Container >

                        </div>
                   </Col>
                   <Col>
                   
                    <div id="shoppingcart-block-center-right">
                            <h3> Summary</h3>
                    </div>
                   
                   </Col>
                    
                   
                   </Row>
                </div>
               
                <div className="shoppingcart-block-bottom">
                        <Link to="/payment" className="btn btn-primary">Checkout</Link>
                </div>


            </div>
            </Row>
        </div>
    )
}
export default ShoppingCart;