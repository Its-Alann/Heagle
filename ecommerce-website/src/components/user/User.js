import React, { useEffect, useState } from "react";
import {Button, Container, Form, Row, Col} from 'react-bootstrap'
import './User.css'
import { useParams } from "react-router-dom";
import Axios from "axios";
import { useNavigate } from "react-router-dom";



const User = () => {
    const navigate = useNavigate();

	const userId = useParams();

    const [selectedUserPassword, setPassword ]= useState("");
    const [selectedUserEmail, setEmail ]= useState("");
    const [selectedUserTel, setTel ]= useState("");
    const [selectedUserFirstName, setFirstName ]= useState("");
    const [selectedUserLastName, setLastName ]= useState("");
    const [selectedTypeUser, setTypeUser ]= useState("");
    const [selectedTypeSeller, setTypeSeller ]= useState("");

// Password Errors
    const [errMessage, setErrMessage] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
  
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

    const updateUser = () => {
        
        if (selectedUserPassword != passwordConfirm) {
            setErrMessage("Passwords do not match")
        }
        else{
            Axios.post("http://localhost:3001/updateUser", {
                password: selectedUserPassword,
                email: selectedUserEmail,
                phoneNumber: selectedUserTel,
                firstName: selectedUserFirstName,
                lastName: selectedUserLastName,
                typeUser: selectedTypeUser,
                typeSeller: selectedTypeSeller,
                userID: userId.id
            }).then(() => {
                console.log("SUCEECESSS!!")
                
            });
        };
        }

    const goHome = () =>{
        navigate("/home")
    }


        

    return (
        <div className="page">
            <h1>User Information</h1>
            
            <div className="register-block">
                <div className="register-block-top">
                    <h3>Edit User</h3>
                </div>

                <div className="register-block-centre">
                    <Form>
                        <Form.Group> 
                            {/* <Form.Control> */}
                                <input 
                                    type="text" 
                                    value={selectedUserEmail}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Username which is your email"
                                    name="username"
                                />
                            {/* </Form.Control> */}
                        
                        </Form.Group>

                        <Form.Group>
                            <input 
                                type="text" 
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                name="password"
                            />
                        </Form.Group>

                        <Form.Group>
                            <input 
                                type="text" 
                                value={passwordConfirm}
                                onChange={(e) => setPasswordConfirm(e.target.value)}
                                placeholder="Confirm password"
                                name="password"
                            />
                        </Form.Group>

                        {/* <Form.Group>
                            <Form.Control
                                as="textarea"
                                placeholder="Address"
                                rows={3}
                                name="address"
                            />
                         </Form.Group> */}
            
                        <Form.Group>
                            <input 
                                type="text" 
                                value={selectedUserTel}
                                onChange={(e) => setTel(e.target.value)}
                                placeholder="Phone Number"
                                name="phone number"
                            />
                        </Form.Group>

                        <div className="register-block-bottom">
                            <div className="button">
                                <Button type="submit" block className="btn" onClick={updateUser} >Save Changes</Button>
                            </div>
                            <div className="button">

                                <Button className="btn" onClick={goHome}> Cancel </Button>
                            </div> 
                                
                        </div>
                    </Form>
                    
                    <h6 className="error-message">{errMessage}</h6>
                </div>
                
               
            </div>
        </div>
      );

}

export default User;