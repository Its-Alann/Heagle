import React from 'react'
import './seller.css'
import {Card, Button, Container, Row} from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import Axios from "axios";
import baseUrl from "../../SystemVariables";


const Seller = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirm, setEmailConfirm] = useState({});
    const [phoneNumber, setPhone] = useState("");
    const [errMessage, setErrMessage] = useState("");
    const [formConfirm, setFormConfirm] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {

        if (firstName == "") {
            setErrMessage("Please enter your first name")
            setFormConfirm(false)
        }

        else if (password == "") {
            setErrMessage("Please enter a password")
            setFormConfirm(false)
        }

        else if (passwordConfirm == "") {
            setErrMessage("Please confirm the password")
        }

        else if (email == "") {
            setErrMessage("Please enter an email address")
            setFormConfirm(false)
        }

        else if (phoneNumber == "") {
            setErrMessage("Please enter a phone number")
        }
        
        else {
            setErrMessage("")
            setFormConfirm(true)
        }
        
    }, [firstName, password, passwordConfirm, email, phoneNumber])
    
    const handleSignUp = () => {
        
        const url = baseUrl + "/Seller"

        
        if (password != passwordConfirm) {
            setErrMessage("Passwords do not match")
        }
        
        else if (password === passwordConfirm && formConfirm == true) {
            setErrMessage("")

            Axios.post(url, {
    
                firstName: firstName,
                lastName: lastName,
                password: password,
                email: email,
                phoneNumber: phoneNumber
            }).then((console.log("Success")))
            navigate("/login");
    
        }
        
        // console.log(user)
    }

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