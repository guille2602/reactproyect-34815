import React from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Item (props) {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.imgurl} alt='Product photograph'/>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.price}
          </Card.Text>
        </Card.Body>
      </Card>
    );
}

export default Item;