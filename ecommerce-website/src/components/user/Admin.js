
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "axios";
import { Container, Row, Col, Button } from 'react-bootstrap'
import './SellerProducts.css'
import './Admin.css'
import baseUrl from "../../SystemVariables";
import { Link } from "react-router-dom";

const Admin = () => {

    const navigate = useNavigate();
    const pageId = useParams();
    const [userProducts, setUserProducts] = useState([]);
    const [refreshUsers, setRefreshUsers] = useState(0);

    useEffect(() => {
        const getProductFromServer = baseUrl + "/fetchUserList"
        Axios.get(getProductFromServer).then((response) => {
            setUserProducts(response.data);
        });
    }, [refreshUsers]);

    function handleRemoveUser(userId) {
        console.log(userId);
        const url = baseUrl + "/removeUser";
        Axios.delete(url, {
            data: {
                id: userId,
                typeUser :JSON.parse(localStorage.getItem("user")).typeUser
            }
        }).then((res) => {
            console.log(res.data);
            setRefreshUsers(refreshUsers + 1);
        });
    } 

    function isAdmin(){
        if(localStorage.getItem('user')){
            return JSON.parse(localStorage.getItem("user")).typeUser === "admin";
        }
        else{
            return false;
        }
    }

     return (

         
         <Container Style="padding:20px 0px">

            <h1> List of All Users </h1> 
          {
              userProducts.length > 0 && isAdmin() ?
                  userProducts.map((user, idx) => (

                      <Row>
                          <Col Col lg={true} className="align-self-center">
                              {/* Product Image */}
                              <div className="row-md-6 single-image">
                                  User ID: {user.id}
                              </div>
                          </Col>

                          <Col Col lg={true}>
                              <div className="product-dtl bg-light">
                                  {/* User Email */}
                                  <div className="">{user.email}</div>

                                  {/* Product Description */}
                                  <div className="">
                                      <p> Password: {user.password}</p>
                                  </div>

                              </div>
                          </Col>

                          <Col Col lg={true} className="align-self-center SellerButtons">
                              {/* Edit/Remove Buttons */}
                              <Row className="SellerEditButton justify-content-center">
                                  <button onClick={() => {
                                      navigate("/login/user/" + user.id);
                                  }}>Edit</button>
                              </Row>
                              <Row className="SellerRemoveButton justify-content-center">
                                  <button onClick={() => {
                                      handleRemoveUser(user.id);
                                  }}>Remove</button>
                              </Row>
                          </Col>
                      </Row>

                  )) : <div className="retryBtn"><Link exact to="/login"><Button>Please retry logging in</Button></Link></div>
          }

      </Container >
  )
}

export default Admin