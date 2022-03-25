import React from 'react'
import './Register.css'
import { Card, Button, Container, Row } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import Axios from "axios";
import baseUrl from "../../SystemVariables";
import { useParams } from "react-router-dom";

const Marketplace = () => {

    const pageId = useParams();

    useEffect(()=> {
        // console.log("Hello")
        // console.log(pageId.id);
    }, []);

    const [productName, setproductName] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [quantity, setQuantity] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [type, setType] = useState("");
    // const [sellerID, setsellerID] = useState("");
    const [errMessage, setErrMessage] = useState("");
    const [formConfirm, setFormConfirm] = useState(false);
    const navigate = useNavigate();

    const handleAddProduct = () => {

        const url = baseUrl + "/addProduct"
        const sellerID = pageId.id
        console.log("Hello pageid: ")
        console.log(sellerID);
        
            Axios.post(url, {

                productName: productName,
                imageURL: imageURL,
                quantity: quantity,
                description: description,
                price: price,
                type: type,
                sellerID: sellerID,

            }).then((console.log("Success")))
            navigate("/login/SellerProducts/" + pageId.id);

        }

    return (
        <div className="page">
          <h1>Seller's Page</h1>
          <div className="register-block">
              <div className="register-block-top">
                  <h3>Add Product</h3>
                  <div className="username">

                  </div>
                  <div className="password">

                  </div>
              </div>
              <div className="register-block-center">
                  <form>
                      <input type="text" placeholder='Product Name' onChange={({ target }) => {
                            setproductName(target.value);
                      }} />
                      <input type="text" placeholder='Image URL' onChange={({ target }) => {
                            setImageURL(target.value);
                      }} />
                      <input type="text" placeholder='Quantity' onChange={({ target }) => {
                            setQuantity(target.value);
                      }} />
                      <input type="text" placeholder='Description' onChange={({ target }) => {
                            setDescription(target.value);
                      }} />
                      <input type="text" placeholder='Price' onChange={({ target }) => {
                            setPrice(target.value);
                      }} />

                        <input type="text" placeholder='Type' onChange={({ target }) => {
                            setType(target.value);
                        }} />

                  </form>
                  <h6 className="error-message">{errMessage}</h6>
              </div>
              <div className="register-block-bottom">
                  <div className="button">

                      <Button className="btn" onClick={handleAddProduct}> Add Product </Button>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Marketplace