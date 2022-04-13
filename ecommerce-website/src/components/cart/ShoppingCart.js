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
    
    const [totalPrice, setTotalPrice] = useState(0);
    var totalPrice2 = 0;

    const updateCartDb = (response)=>{
        var apiUrl;
        console.log("response: "+response)
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
            if( JSON.parse(localStorage.getItem("cart")) == null){
                localStorage.setItem('cart', JSON.stringify([...cartFromLocalStorage])); //update item in localStorage
            }

            Axios.get(baseUrl + "/getCart/"+ userId).then((res)=>{
                updateCartDb(res.data[0]);
                }
            )
            
        }

        // display the correct products (manage quantity)
        cart.map((product, idx) => (
            Axios.get(baseUrl + "/getProductQty/"+ product.id).then((res)=>{
                
                totalPrice2 = totalPrice2 + product.price
                    setTotalPrice(totalPrice2)


                // console.log("Item " + product.id + ": "+ res.data.length);
                // console.log("Initial Cart:");
                // console.log(cart);

                // if added product(s) in cart is/are removed in seller's product list, then remove the added product(s) in cart
                if(res.data.length === 0){  // found the product to be deleted
                    
                    // console.log(product.id + ": to be deleted");
                    cart.splice(idx, 1);
                    console.log("After Cart:");
                    console.log(cart);

                    localStorage.setItem('cart', JSON.stringify([...cartFromLocalStorage])); //update item in localStorage
                    window.location.reload(false); //refresh page to display accordingly (to remove if can find better solution)  
  
                }
                else{
                    // if request quantity of the added product(s) in cart > seller's quantity product, then display seller's quantity & adjust price
                    // else display request quantity of client
                    if(product.quantity > res.data[0].quantity){
                        console.log(product.id + ": in Qty fct when clients qty > sellers qty");
                        cart[idx].quantity =  res.data[0].quantity;
                        cart[idx].price =  res.data[0].quantity*res.data[0].price;
                        localStorage.setItem('cart', JSON.stringify([...cartFromLocalStorage]));    //update qty and price of item in localStorage
                        window.location.reload(false);  //refresh page to display accordingly (to remove if can find better solution)                    
                    }
                }
            }, [])
        ))
    }, [])

    const navigate = useNavigate();

    const handleRemoveItems = () => {

		setTotalPrice("");
		totalPrice2 = 0;
		// localStorage.removeItem("cart");
        localStorage.removeItem('cart', JSON.stringify([...cartFromLocalStorage ]));

		console.log("Cart removed.");
        
        const url = baseUrl + "/removeCart";
        Axios.delete(url, {
            data:{
                userId: userId
            }
        })
        // localStorage.setItem('cart', JSON.stringify([...cartFromLocalStorage, [] ]));

        window.location.reload(false);  //refresh page to display accordingly (to remove if can find better solution)   

	};

	if (JSON.parse(localStorage.getItem("cart")) ) {

        // localStorage.getItem("cart")

        // localStorage.getItem("cart").includes("id\":")

        // if (localStorage.getItem("user").includes("typeUser\":\"seller") || localStorage.getItem("user").includes("typeUser\":\"admin")){ 


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
                                <h3>My Items</h3>
    
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
                                                <div className="product-count">${product.price}</div> {/*(to change variable if can find better solution)*/}
                                        
                                                {/* Product Quantity */}
                                                <Row className="justify-content-md-center">
                                                <div className="quantity">
                                                    <p className="alert">Quantity: {product.quantity}</p> {/*(to change variable if can find better solution)*/}
                                                </div>
                                                </Row>
                                            </div>
                                            </div>
                                        </Col>
    
                                        
                                        </Row>
                                        
                                    )) : <div className="retryBtn"><h1>Shopping Cart Empty!</h1></div>
                                }

                                
                                    <div className="button">
                                        <Button className="btn" 
                                            onClick={handleRemoveItems}
                                        >
                                            {" "}
                                            Remove Item(s){" "}
                                        </Button>
                                    </div>
                                </Container >
    
                            </div>
                       </Col>
                       <Col>
                       
                        <div id="shoppingcart-block-center-right">
                                <h3> Summary</h3>
                                Total: {totalPrice} $
                                
                                
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
                            <h3>My Items</h3>

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
                                            <div className="product-count">${product.price}</div> {/*(to change variable if can find better solution)*/}
                                    
                                            {/* Product Quantity */}
                                            <Row className="justify-content-md-center">
                                            <div className="quantity">
                                                <p className="alert">Quantity: {product.quantity}</p> {/*(to change variable if can find better solution)*/}
                                            </div>
                                            </Row>
                                        </div>
                                        </div>
                                    </Col>

                                    
                                    </Row>
                                    
                                )) : <div className="retryBtn"><h1>Shopping Cart Empty!</h1></div>
                            }
                            </Container >

                        </div>
                   </Col>
                   <Col>
                   
                    <div id="shoppingcart-block-center-right">
                            <h3> Summary</h3>
                            Total: {totalPrice} $
                            
                            
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