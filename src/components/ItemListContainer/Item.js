import React from "react";
// import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './item.css'

function Item (props) {
    return (
<div className="card personalizedCard">
  <img src={props.imgurl} alt='Product photograph' className="card-img-top"/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <h6 className="card-text">{props.price}</h6>
  </div>
</div>
    );
}

export default Item;