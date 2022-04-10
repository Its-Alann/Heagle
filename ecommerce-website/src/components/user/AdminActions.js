
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "axios";
import { Container, Row, Col, Button } from 'react-bootstrap'
import './SellerProducts.css'
import './Admin.css'
import baseUrl from "../../SystemVariables";
import { Link } from "react-router-dom";

const AdminActions = () => {

    const [refreshUsers, setRefreshUsers] = useState(0);
	const [adminAction, setAdminAction] = useState([]);

    useEffect(() => {
        const getActionSeller = baseUrl + "/getAdminActions"
        Axios.get(getActionSeller).then((response) => {
            setAdminAction(response.data);
        });
    }, [refreshUsers]);

    function isAdmin(){
        if(localStorage.getItem('user')){
            return JSON.parse(localStorage.getItem("user")).typeUser === "admin";
        }
        else{
            return false;
        }
    }

    // When Admin refuse user to be a Seller, this user becomes a customer
    const refuseSeller = (pId) => {
        const url = baseUrl + "/refuseSeller"
        Axios.post(url, {
            sellerID: pId,
            typeUser: "customer"
        }).then((res) => {
            handleRemoveUser(pId);
        });
    }

    // When Admin accepts user to be a Seller, this user becomes a seller
    const acceptSeller = (pId) => {
        const url = baseUrl + "/acceptSeller"
        Axios.post(url, {
            sellerID: pId,
            typeUser: "seller"
        }).then((res) => {
            handleRemoveUser(pId);
        });       
    }

    // Remove the user's request when admin managed it (either accepts or refuses)
    function handleRemoveUser(sellerID) {
        const url = baseUrl + "/removeAdminAction";
        Axios.delete(url, {
            data:{
                sellerID: sellerID,
                typeUser:"seller"
            }
        }).then((res) => {
            console.log(res.data);
            setRefreshUsers(refreshUsers + 1);
        });
    } 

     return (

         
        <Container Style="padding:20px 0px; font-family: Abel;">

            <h1>Admin's Action(s) </h1> 
            <h5>Request(s) to Become a Seller:</h5>
            <h7>Accept: User will be a seller | Refuse: User will be a customer</h7>
          {
              adminAction.length > 0 && isAdmin() ?
                adminAction.map((user, idx) => (
                    
                      <Row style={{margin: '50px'}}>
                          <Col Col lg={true} className="align-self-center">
                              {/* User ID */}
                              <div className="row-md-6 single-image">
                                  User ID: {user.sellerID}
                              </div>
                          </Col>

                         

                          <Col Col lg={true} className="align-self-center SellerButtons">
                              {/* Accept/Refuse Buttons */}
                              <Row className="SellerEditButton justify-content-center">
                                  <button 
                                  onClick={()=>{
                                      acceptSeller(user.sellerID);
                                      }}>Accept</button>
                              </Row>


                              <Row className="SellerRemoveButton justify-content-center">
                                  <button onClick={() => {
                                      refuseSeller(user.sellerID);
                                  }}>Refuse</button>
                              </Row>
                          </Col>
                      </Row>

                )) : <div className="retryBtn">
                        <h4 Style="padding:20px;">No Request</h4>
                        <Link exact to="/login"><Button> Go Back to Login Options</Button></Link>
                    </div>
          }

        </Container >
  )
}

export default AdminActions