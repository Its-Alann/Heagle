import React from 'react'
import './ShoppingCart.css'
import {Card, Button, Container, Row} from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import Axios from "axios";
import baseUrl from "../../SystemVariables";


const ShoppingCart = () => {

    return(
        <div className="page">
            <div className="shoppingcart-block">
                <div className="shoppingcart-block-top">        
                    <h3>Shopping Cart</h3>
                </div>
                <div className="shoppingcart-block-center">
                   <div id="shoppingcart-block-center-left">
                       {/* temporary */}
                        <h1>left</h1>
                   </div>
                   <div id="shoppingcart-block-center-right">
                        <h3> Summary</h3>
                   </div>
                </div>
                <div className="shoppingcart-block-bottom">
                    <button type="button" class="btn btn btn-primary"> Checkout </button>
                </div>
            </div>
        </div>
    )
}
export default ShoppingCart;