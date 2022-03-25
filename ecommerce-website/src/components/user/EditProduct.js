import React from 'react'
import './Register.css'
import { Card, Button, Container, Row } from 'react-bootstrap'
import { Link, useNavigate, useParams} from "react-router-dom"
import { useEffect, useState } from "react";
import Axios from "axios";
import baseUrl from "../../SystemVariables";
import productDatabase from '../products/productDatabase';


const EditProduct = () => {
    const productId = useParams().id;
    //console.log(productDatabase);
    
    const productInfo = productDatabase.find((object)=>{
        return "" + object.id === productId; 
    });
    //console.log(productInfo);
    
    const [productName, setproductName] = useState(productInfo.name);
    const [imageURL, setImageURL] = useState(productInfo.imageUrl);
    const [quantity, setQuantity] = useState(productInfo.quantity);
    const [description, setDescription] = useState(productInfo.description);
    const [price, setPrice] = useState(productInfo.price);
    const [type, setType] = useState(productInfo.type);
    const [sellerID, setSellerID] = useState(JSON.parse(localStorage.getItem("user")).id)
    const [errMessage, setErrMessage] = useState("");
    const [formConfirm, setFormConfirm] = useState(false);
    const navigate = useNavigate();

    const handleEditProduct = () => {

        const url = baseUrl + "/editProduct";

        
            Axios.post(url, {
                id: productId,
                name: productName,
                imageURL: imageURL,
                quantity: quantity,
                description: description,
                price: price,
                type: type,
                sellerID: sellerID

            }).then(()=>{
                (console.log("Success"));
                navigate("/login/SellerProducts/" + sellerID);
            })

        }

    return (
        <div className="page">
          <h1>Seller's Page</h1>
          <div className="register-block">
              <div className="register-block-top">
                  <h3>Edit Product</h3>
                  <div className="username">

                  </div>
                  <div className="password">

                  </div>
              </div>
              <div className="register-block-center">
                  <form>
                      <input type="text" value={productName} onChange={({ target }) => {
                            setproductName(target.value);
                      }} />
                      <input type="text" value={imageURL} onChange={({ target }) => {
                            setImageURL(target.value);
                      }} />
                      <input type="text" value={quantity} onChange={({ target }) => {
                            setQuantity(target.value);
                      }} />
                      <input type="text" value={description} onChange={({ target }) => {
                            setDescription(target.value);
                      }} />
                      <input type="text" value={price} onChange={({ target }) => {
                            setPrice(target.value);
                      }} />

                        <input type="text" value={type} onChange={({ target }) => {
                            setType(target.value);
                        }} />

                  </form>
                  <h6 className="error-message">{errMessage}</h6>
              </div>
              <div className="register-block-bottom">
                  <div className="button">

                      <Button className="btn" onClick={handleEditProduct}> Edit Product </Button>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default EditProduct