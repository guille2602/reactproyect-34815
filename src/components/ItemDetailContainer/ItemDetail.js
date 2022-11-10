import React from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemDetail ({id, producto, precio}) {
  const imgurl = `/pictures/${id}A.webp`
  return (
    <div className="card personalizedCard">
      <img src={imgurl} alt='Product photograph' className="card-img-top"/>
      <div className="card-body">
        <h5 className="card-title">{producto}</h5>
        <h6 className="card-text">{precio}</h6>
      </div>
    </div>
   );
}

export default ItemDetail;