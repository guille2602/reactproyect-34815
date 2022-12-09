import {  useContext, React } from "react";
import "./cartElement.css";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { cartContext, convertToARSMoneyFormat } from "../../context/cartContext";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash }  from "@fortawesome/free-solid-svg-icons";

function CartElement ({product}) {

    const context = useContext(cartContext);

    let productsTotalPrice = parseInt(product.quantity) * parseInt(product.precio);
    productsTotalPrice = convertToARSMoneyFormat(productsTotalPrice);

    function onAdd(count) {
      context.addItem(product, count);
    }

    function handleDeleteBtn () {
      context.removeItem(product.id);
    }

    return(
      <div className="row container-md itemInfoContainer py-4 px-2 mx-0">
        <div className="row col-xl-12 mx-0">
          <div className="col-sm-4 col-md-4 col-lg-3 col-xl-3 py-2">
            <Link to={`/item/${product.id}`}>
              <img
                className="itemImg"
                src={product.imgurl}
                alt="Product photograph"
              />
            </Link>
          </div>
          <div className="flex-Y col-sm-7 col-md-8 col-lg-4 col-xl-4 px-2" >
            <h4 className="prodName">{product.producto}</h4>
            <p className="pt-1">Precio unitario: ${product.precio}</p>
          </div>
          <div className="flex-Y col-sm-12 col-md-12 col-lg-2 col-xl-2 py-2 px-2">
            <ItemCount
            className="col-xl-12 col-lg-12 col-md-12 col-sm-12"
            onAdd={onAdd}
            stock={product.stock}
            init={product.quantity}
            title=""
            disableTitleBtn={true}>
            </ItemCount>
          </div>
          <div className="flex-Y col-sm-12 col-md-12 col-lg-1 col-xl-1 py-2 px-2">
            <button type="button" className="deleteBtn opacity-90 btn" onClick={handleDeleteBtn}>
              <FontAwesomeIcon icon={faTrash}/>
            </button>
          </div>
          <h3 className="flex-Y col-sm-12 col-md-12 col-lg-2 col-xl-2 py-2 text-center">{productsTotalPrice}</h3>
        </div>
      </div>
    )
}

export default CartElement;