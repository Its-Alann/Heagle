import React from "react";
import Products from '../../tempItemsDatabase'
import {Card, Button, Container, Row} from 'react-bootstrap'
import './Products.css';

const ProductCards = () => {

    const listItems = Products.map((item) =>
    
        <div className="card" key={item.id}>
            <div className="card-img">
                <img src={item.image} alt="" />
            </div>
            <div className="card-header">
                <Card.Body>
                    <Card.Title className="card-title"> {item.name} </Card.Title>
                    <Card.Text className="card-text"> {item.description} </Card.Text>
                    <Card.Text className="card-price"> {item.price}{item.currency} </Card.Text>
                    <Button className="btn"> Add to Card </Button>
                </Card.Body>
            </div>
        </div>
    )

  return (
    <div>
        <Container>
            <Row xs={2} md={4}>
                {listItems}
            </Row>
        </Container>
    </div>
  )
}

export default ProductCards;