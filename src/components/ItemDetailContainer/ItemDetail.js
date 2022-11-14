import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './itemDetail.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../ItemCount/ItemCount.js';
import {Link} from 'react-router-dom'

function ItemDetail ({id, producto, precio, stock, categoria, info, imgurl}) {
  return (
    <div className="container-md itemInfoContainer">
      <div className="row ms-auto">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <img className="itemImg" src={imgurl} alt='Product photograph'/>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 px-5 py-4">
          <h2 className="prodName text-right">{producto}</h2>
          <hr className="mt-0 mb-2"/>
          <div className="row-flex">
            <h6 className="col-sm-8 col-lg-10 col-md-8 col-xl-10">Categoría</h6>
            <Link to={`/category/${categoria}`} className="categoryLink col-sm-4 col-lg-2"><button type="button" className="custBtn col-sm-12 col-md-12 col-lg-12 col-xl-12" >{categoria}</button></Link>
          </div>
          <h5 className="mt-2 text-right">{precio}</h5>
          <p className="mt-2 text-right col-sm-12 col-md-12 col-lg-12 col-xl-12">{info}</p>
          <ItemCount stock={stock} init={1} title="Agregar al carrito"/>
        </div>
      </div>
    </div>
   );
}

export default ItemDetail;