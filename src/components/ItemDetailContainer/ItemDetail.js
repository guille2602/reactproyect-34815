import "bootstrap/dist/css/bootstrap.min.css";
import "./itemDetail.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {useContext, React} from "react";
import { cartContext } from "../../context/cartContext";
import ItemCount from "../ItemCount/ItemCount.js";
import { Link } from "react-router-dom";

function ItemDetail({ product }) {
  
  const context = useContext(cartContext);
  //1. Creo un handler del evento del counter.
  function onAdd(count) {
    context.addItem(product, count);
  }

  //Ver si se agregaron items al carrito para restar del stock
    let updatedStock = product.stock - context.itemQuantity(product.id);

  //2. Envío por props el evento
  return (
    <div className="container-md itemInfoContainer">
      <div className="row ms-auto">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <img
            className="itemImg"
            src={product.imgurl}
            alt="Product photograph"
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 px-5 py-4">
          <h2 className="prodName text-right">{product.producto}</h2>
          <hr className="mt-0 mb-2" />
          <div className="row-flex">
            <h6 className="col-sm-8 col-lg-10 col-md-8 col-xl-10">Categoría</h6>
            <Link
              to={`/category/${product.categoria}`}
              className="categoryLink col-sm-4 col-lg-2"
            >
              <button
                type="button"
                className="custBtn col-sm-12 col-md-12 col-lg-12 col-xl-12"
              >
                {product.categoria}
              </button>
            </Link>
          </div>
          <h5 className="mt-2 text-right">{product.precio}</h5>
          <p className="mt-2 text-right col-sm-12 col-md-12 col-lg-12 col-xl-12">
            {product.info}
          </p> 
          <ItemCount
            onAdd={onAdd}
            stock={updatedStock}
            init={1}
            title="Agregar al carrito"
          />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
