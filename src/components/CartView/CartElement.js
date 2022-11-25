import {  useContext, React } from "react";
import "./cartElement.css";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from "../../context/cartContext";


function CartElement ({product}) {

    const context = useContext(cartContext);

    let productsTotalPrice = parseInt(product.quantity) * parseInt(product.precio.replace('.',''));
    productsTotalPrice = productsTotalPrice.toLocaleString('es-AR', {
      style: 'currency',
      currency: 'ARS',
      maximumFractionDigits: 0
    })

    function onAdd(count) {
      context.addItem(product, count);
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
          <div className="flex-Y col-sm-8 col-md-4 col-lg-4 col-xl-5 px-4 py-4" >
            <h4 className="prodName">{product.producto}</h4>
            <p className="pt-1">Precio unitario: ${product.precio}</p>
          </div>
          <div className="flex-Y col-sm-4 col-md-2 col-lg-2 col-xl-2 py-4">
            <ItemCount 
            onAdd={onAdd}
            stock={product.stock}
            init={product.quantity}
            title=""
            disableTitleBtn={true}>
            </ItemCount>
          </div>
          <h3 className="flex-Y col-sm-1 col-md-2 col-lg-2 col-xl-2 px-4 py-4">{productsTotalPrice}</h3>
        </div>
      </div>
    )
}

export default CartElement;