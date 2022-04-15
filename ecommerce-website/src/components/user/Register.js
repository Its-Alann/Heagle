import React from 'react'
import './Register.css'
import {Card, Button, Container, Row} from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import Axios from "axios";
import baseUrl from "../../SystemVariables";


const Register = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirm, setEmailConfirm] = useState({});
    const [phoneNumber, setPhone] = useState("");
    const [typeUser, setUserType] = useState("");
    const [errMessage, setErrMessage] = useState("");
    const [formConfirm, setFormConfirm] = useState(false);
    const [id, setId] = useState("");
    const navigate = useNavigate();

    // Post in Db, the user's type
    const requestSellerType = (pId) => {
        const url = baseUrl + "/requestSellerType/"+pId

        if(typeUser == "seller"){
            Axios.post(url, {
                id: pId,
                typeUser: typeUser
            });    
        }
    }

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
        
        else if (typeUser == "") {
            setErrMessage("Please enter an user type")
            
        }
        
        else {
            setErrMessage("")
            setFormConfirm(true)
        }
        
    }, [firstName, password, passwordConfirm, email, phoneNumber, typeUser])
    


    const handleSignUp = () => {
        
        const url = baseUrl + "/registerUser"


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
                phoneNumber: phoneNumber,
                typeUser: typeUser
            }).then(
                (res)=>{
                setId(res.data)
                requestSellerType(res.data);
                }
            )
            navigate("/login");
    
        }
        
    }

    return(
        <div className="page">
            <h1>Sign Up</h1>
            <div className="register-block">
                <div className="register-block-top">
                    <h3>Sign Up</h3>
                    <div className="username">

                    </div>
                    <div className="password">

                    </div>
                </div>
                <div className="register-block-center">
                    <form>
                        <input type="text" placeholder='First Name' onChange={({ target }) => {
                            setFirstName(target.value);
                        }}/>
                        <input type="text" placeholder='Last Name' onChange={({ target }) => {
                            setLastName(target.value);
                        }}/>
                        <input type="password" placeholder='Password' onChange={({ target }) => {
                            setPassword(target.value);
                        }}/>
                        <input type="password" placeholder='Reenter Password' onChange={({ target }) => {
                            setPasswordConfirm(target.value);
                        }}/>
                        <input type="text" placeholder='Email' onChange={({ target }) => {
                            setEmail(target.value);
                        }}/>
                        <input type="text" placeholder='Phone Number' onChange={({ target }) => {
                            setPhone(target.value);
                        }}/>
                        <input type="text" placeholder='Customer or Seller' onChange={({ target }) => {
                            setUserType(target.value);
                        }}/>
                    </form>
                    <h6 className="error-message">{errMessage}</h6>
                </div>
                <div className="register-block-bottom">
                    <div className="button">

                        <Button className="btn" onClick={handleSignUp}> Register </Button>
                    </div>
                    <div className="create-account">
                        <Link exact to="/login">Already have an account? Log In now.</Link>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register;