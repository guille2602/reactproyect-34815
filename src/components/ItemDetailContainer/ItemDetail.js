import "bootstrap/dist/css/bootstrap.min.css";
import "./itemDetail.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {useContext, React} from "react";
import { cartContext, convertToARSMoneyFormat } from "../../context/cartContext";
import ItemCount from "../ItemCount/ItemCount.js";
import { Link } from "react-router-dom";

function ItemDetail({ product }) {
  
  const context = useContext(cartContext);

  function onAdd(count) {
    context.addItem(product, count);
  }

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
          <h5 className="mt-2 text-right">{convertToARSMoneyFormat(parseInt(product.precio))}</h5>
          <p className="mt-2 mb-4 text-right col-sm-12 col-md-12 col-lg-12 col-xl-12">
            {product.info}
          </p> 
          {
            context.itemQuantity(product.id) === 0
            ? <ItemCount
            onAdd={onAdd}
            stock={product.stock}
            init={1}
            title="Agregar al carrito"
            disableTitleBtn={false}
            />
            : <Link to="/cart">
                <button className={"btn"} style={{backgroundColor:"#c7ad8a", color: "white"}}>Ir al carrito</button>
              </Link>
          }
          
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
