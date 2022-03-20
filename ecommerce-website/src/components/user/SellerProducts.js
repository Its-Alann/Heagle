import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import { Container } from "react-bootstrap";
import {Button, Row, Col} from 'react-bootstrap'


const SellerProducts = (props) => {

    const pageId = useParams();

    const [userProducts, setUserProducts ]= useState("");


    useEffect(()=> {
        // window.location.reload(false)

        const getProductFromServer = "http://localhost:3001/getSellerProducts/"  + pageId.id
        Axios.get(getProductFromServer).then((response) => {
            console.log("alice: products from db: ")
          console.log(response.data)
          setUserProducts(response.data);

        });
    }, []);

const displayitem = () => {
    if(userProducts > 0){
        console.log("alice in userproduct" + userProducts[0])
            userProducts.map( (sellerItem) => {
                <div>
                    <h1>{sellerItem.name}</h1> 
                    <h3>{sellerItem.description}</h3>
                </div>
            })
    }
    else{
        console.log("alice nothig in userproduct")
    }
}

    return(

        <Container>

        {
            userProducts.length > 0 ? 
            console.log("alice in userproduct"  )
            // userProducts.map( (sellerItem) => {
            //     <div>
            //         <h1>{sellerItem.name}</h1> 
            //         <h3>{sellerItem.description}</h3>
            //     </div>
            // })
             : console.log("alice nothig in userproduct")
      

          }
          <div>

<h1>Here is seller products page!</h1>

<h2>seller#: {pageId.id}</h2>





</div>
        </Container>


        
        

    )
}

export default SellerProducts