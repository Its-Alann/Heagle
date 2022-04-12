import React, { useEffect, useState } from "react";
import {Button} from 'react-bootstrap'
import './User.css'
import { useParams } from "react-router-dom";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import baseUrl from "../../SystemVariables";



const User = (props) => {
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
        const getUserFromServer = baseUrl + "/getUser/" + userId.id  
        Axios.get(getUserFromServer).then((response) => {
            setEmail(response.data[0].email);
            setTel(response.data[0].phoneNumber);
            setFirstName(response.data[0].firstName);
            setLastName(response.data[0].lastName);
            setTypeUser(response.data[0].typeUser);
            setTypeSeller(response.data[0].typeSeller);
          });
    }, []);

    useEffect(()=> {
        if (selectedUserPassword === "") {
            setErrMessage("Please enter a password")
        }
        else if (passwordConfirm === "") {
            setErrMessage("Please confirm the password")
        }
        else {
            setErrMessage("")
        }
    }, [selectedUserPassword, passwordConfirm]);

    const updateUser = () => {
        
        if (selectedUserPassword !== passwordConfirm) {
            setErrMessage("Passwords do not match")
        }
        else if(selectedUserPassword === "" && passwordConfirm === ""){
            navigate("/login/user/"+ userId.id)
        }
        else if (selectedUserPassword === passwordConfirm){
            setErrMessage("")

            Axios.post(baseUrl+"/updateUser", {
                password: selectedUserPassword,
                email: selectedUserEmail,
                phoneNumber: selectedUserTel,
                firstName: selectedUserFirstName,
                lastName: selectedUserLastName,
                typeUser: selectedTypeUser,
                typeSeller: selectedTypeSeller,
                userID: userId.id
            }).then(() => {
                console.log("Edit user info - success.")        
            });
            
            //prompt user to log back in
            setEmail("");
            setPassword("");
            setErrMessage("");
            localStorage.removeItem("user");
            localStorage.removeItem("cart");
            console.log("User logged out and cart removed");

            navigate("/home");

            
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
                    <form>
                        <input type="text" placeholder='Email' value={selectedUserEmail} onChange={({ target }) => {
                            setEmail(target.value);
                        }}/>
                        <input type="password" placeholder='Password' onChange={({ target }) => {
                            setPassword(target.value);
                        }}/>
                        <input type="password" placeholder='Reenter Password' onChange={({ target }) => {
                            setPasswordConfirm(target.value);
                        }}/>

                        <input type="text" placeholder='Phone number' value={selectedUserTel} onChange={({ target }) => {
                            setTel(target.value);
                        }}/>
                    </form>
                    
                    <h6 className="error-message">{errMessage}</h6>
                </div>
                <div className="register-block-bottom">
                    <div className="button">
                        <Button type="submit" block className="btn" onClick={updateUser} >Save Changes</Button>
                    </div>
                    <div className="button">

                        <Button className="btn" onClick={goHome}> Cancel </Button>
                    </div>        
                </div>
               
            </div>
        </div>
      );

}

export default User;