import React from 'react'
import './seller.css'
import {Card, Button, Container, Row} from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import Axios from "axios";
import baseUrl from "../../SystemVariables";


const Seller = () => {

    return(
        <div className="page">
            <div className="seller-block">
                <div className="seller-block-top">        
                    <h3>Seller's Name</h3>
                    <p id="positive-feedback">XX% Positive Feedback</p>
                    {/* <div className="username">
                        username
                    </div>
                    <div className="password">

                    </div> */}
                </div>
                <div className="seller-block-center">
                   <h4>About Us</h4>
                   <p id="about-us"> IGA, Inc. is an American chain of grocery stores that operates in more than 41 countries.</p>
                </div>
                <div className="seller-block-bottom">
                <h4>Items For Sale</h4>
                </div>
            </div>
        </div>
    )
}
export default Seller;