import React from "react";
// import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './item.css'
import { Link } from 'react-router-dom';
import { convertToARSMoneyFormat } from "../../context/cartContext.jsx";

function Item ({id, name, price, imgurl}) {
  const itemUrl = `/item/${id}`;

  return (
    <div className="card personalizedCard">
      <Link to={itemUrl}>
        <img src={imgurl} alt='Product photograph' className="card-img-top"/>
      </Link>
      <div className="card-body">
        <h6 className="card-title mb-1">{name}</h6>
        <h5 className="card-text">{convertToARSMoneyFormat(parseInt(price))}</h5>
      </div>
    </div>
  );
}

export default Item;