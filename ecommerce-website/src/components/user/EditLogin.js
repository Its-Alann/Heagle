import React from 'react'
import './EditLogin.css'
import {Card, Button, Container, Row} from 'react-bootstrap'
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";

const EditLogin = () => {

    const userId = useParams(); 

    const [selectedUserPassword, setPassword ]= useState("");
    const [selectedUserEmail, setEmail ]= useState("");
    const [selectedUserTel, setTel ]= useState("");
    const [selectedUserFirstName, setFirstName ]= useState("");
    const [selectedUserLastName, setLastName ]= useState("");
    const [selectedTypeUser, setTypeUser ]= useState("");
    const [selectedTypeSeller, setTypeSeller ]= useState("");
  
    useEffect(()=> {
        const getUserFromServer = "http://localhost:3001/getUser/" + userId.id  
        Axios.get(getUserFromServer).then((response) => {
            setPassword(response.data[0].password);
            setEmail(response.data[0].email);
            setTel(response.data[0].phoneNumber);
            setFirstName(response.data[0].firstName);
            setLastName(response.data[0].lastName);
            setTypeUser(response.data[0].typeUser);
            setTypeSeller(response.data[0].typeSeller);
          });
    }, []);
    
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`The name you entered was: ${selectedUserFirstName}`);
    }

    const updateUser = () => {
        Axios.post("http://localhost:3001/updateUser", {
            password: selectedUserPassword,
	        email: selectedUserEmail,
	        phoneNumber: selectedUserTel,
	        firstName: selectedUserFirstName,
	        lastName: selectedUserLastName,
	        typeUser: selectedTypeUser,
	        typeSeller: selectedTypeSeller,
            userID: userId.id
        }).then((event) => {
            console.log("SUCEECESSS!!")
            event.preventDefault();
            alert(`Update Successed!`);
        });
    };

    return(
        <div className="page">
            <h1>Login</h1>
            <div className="login-block">
                <div className="login-block-top">
                    <h3>Connect to you account</h3>
                </div>
                <div className="login-block-center">
                    <form>
                    
                        <input 
                        type="text" 
                        value={selectedUserFirstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="name pls"
                        />

                        <input 
                        type="text" 
                        value={selectedUserPassword}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="password pls"
                        />

                        <input 
                        type="text" 
                        value={selectedUserEmail}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email pls"
                        />

                        <input 
                        type="text" 
                        value={selectedUserTel}
                        onChange={(e) => selectedUserTel(e.target.value)}
                        placeholder="tel pls"
                        />

                        <input 
                        type="text" 
                        value={selectedUserLastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="last name pls"
                        />

                        <input 
                        type="text" 
                        value={selectedTypeUser}
                        onChange={(e) => setTypeUser(e.target.value)}
                        placeholder="type user pls"
                        />
                        
                        <input 
                        type="text" 
                        value={selectedTypeSeller}
                        onChange={(e) => setTypeSeller(e.target.value)}
                        placeholder="type seller pls"
                        />

                     
                    
                        {/* <input type="submit" /> */}
                        <Button type="submit" className="btn" onClick={updateUser} > Update button!!</Button>
                    </form>
                </div>
                <div className="login-block-bottom">
                    <div className="button">
                        {/* <Button className="btn"> Update </Button> */}
                        <p></p>
                        
                        <div className="create-account">
						<Link exact to="/login"><Button className="btn"> Cancel </Button></Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditLogin;