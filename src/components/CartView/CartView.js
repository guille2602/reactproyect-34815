import {useContext, React} from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./cartView.css"
import CartElement from "./CartElement";

function CartView() {
    const context = useContext(cartContext);
    return (
        <div className="custContainer container">
        <h4 className="text-center pt-4 pb-3 custom-h2">Carrito ({context.cartCount()})</h4>
            {
                context.cart.map((item)=>(
                    <>
                    <hr className="mt-0 mb-2"/>
                    <CartElement 
                    className='ms-auto col-sm-12 col-md-12 col-lg-12 col-xl-12'
                    key={item.id}
                    product={item}>
                    </CartElement>
                    </>)
                    )
            }
        </div>
    )
}

export default CartView;