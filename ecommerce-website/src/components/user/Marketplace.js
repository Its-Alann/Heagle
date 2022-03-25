import React from 'react'
import './Register.css'
import { Card, Button, Container, Row } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import Axios from "axios";
import baseUrl from "../../SystemVariables";


const Marketplace = () => {

    const [productName, setproductName] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [quantity, setQuantity] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [type, setType] = useState("");
    const [errMessage, setErrMessage] = useState("");
    const [formConfirm, setFormConfirm] = useState(false);
    const navigate = useNavigate();

    const handleAddProduct = () => {

        const url = baseUrl + "/addProduct"

        
            Axios.post(url, {

                productName: productName,
                imageURL: imageURL,
                quantity: quantity,
                description: description,
                price: price,
                type: type,

            }).then((console.log("Success")))

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