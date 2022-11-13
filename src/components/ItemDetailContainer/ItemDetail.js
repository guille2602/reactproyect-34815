import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './itemDetail.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../ItemCount/ItemCount.js';

function ItemDetail ({id, producto, precio, stock, categoria, info}) {
  const imgurl = `/pictures/${id}A.webp`
  return (
    <div className="container-md itemInfoContainer">
      <div className="row ms-auto">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <img className="itemImg" src={imgurl} alt='Product photograph'/>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 px-5 py-4">
          <h2 className="prodName text-right">{producto}</h2>
          <hr className="mt-0 mb-2"/>
          <h6 className="text-right">Categoría {categoria}</h6>
          <h5 className="mt-2 text-right">{precio}</h5>
          <p className="mt-2 text-right">{info}</p>
          <ItemCount stock={stock} init={1} title="Agregar al carrito"/>
        </div>
      </div>
    </div>
   );
}

export default ItemDetail;