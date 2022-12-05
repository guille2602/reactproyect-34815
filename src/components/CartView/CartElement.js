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
        <div className="row container-md itemInfoContainer py-4">
        <div className="row ms-auto col-xl-12">
          <div className="col-sm-4 col-md-4 col-lg-4 col-xl-3">
            <Link to={`/item/${product.id}`}>
              <img
                className="itemImg"
                src={product.imgurl}
                alt="Product photograph"
              />
            </Link>
          </div>
          <div className="flex-Y col-sm-7 col-md-3 col-lg-3 col-xl-4 px-4 py-4" >
            <h4 className="prodName">{product.producto}</h4>
            <p className="pt-1">Precio unitario: ${product.precio}</p>
          </div>
          <div className="flex-Y col-sm-12 col-md-2 col-lg-2 col-xl-2 py-3 px-0">
            <ItemCount
            className="col-xl-12 col-lg-12 col-md-12 col-sm-12"
            onAdd={onAdd}
            stock={product.stock}
            init={product.quantity}
            title=""
            disableTitleBtn={true}>
            </ItemCount>
          </div>
          <button type="button" className="deleteBtn btn col-xl-1 col-lg-1 col-md-1 col-sm-12" onClick={handleDeleteBtn}>
            <FontAwesomeIcon icon={faTrash}/>
          </button>
          <h3 className="flex-Y col-sm-12 col-md-2 col-lg-2 col-xl-2 px-4 py-4 text-center">{productsTotalPrice}</h3>
        </div>
      </div>
    )
}

export default CartElement;