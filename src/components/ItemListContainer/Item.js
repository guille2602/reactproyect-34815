import React from "react";
// import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './item.css'
import { Link } from 'react-router-dom';

function Item ({id, name, price, imgurl}) {
  const itemUrl = `/item/${id}`;
  return (
    <div className="card personalizedCard">
      <Link to={itemUrl}>
        <img src={imgurl} alt='Product photograph' className="card-img-top"/>
      </Link>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-text">{price}</h6>
      </div>
    </div>
  );
}

export default Item;