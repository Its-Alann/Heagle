import React from "react";
import Products from '../../tempItemsDatabase'
import {Card, Button, Container, Row} from 'react-bootstrap'
import { Link } from "react-router-dom";

const ProductCards = () => {

    const listItems = Products.map((item) =>
    
        <div className="card" key={item.id}>
            <Link to={`/${item.type}/${item.id}`}>
            <div className="card-img">
                <img src={item.image} alt="" />
            </div>
            </Link>
            <div className="card-header">
                <Card.Body>                         
                    <Link to={`/${item.type}}/${item.id}`}>
                    <Card.Title> {item.name} </Card.Title>
                    </Link>
                    <Card.Text> {item.description} </Card.Text>
                    <Card.Text> {item.price}{item.currency} </Card.Text>
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