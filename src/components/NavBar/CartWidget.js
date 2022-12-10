//Rendering de un ícono Cart, hay que exportarlo para incluirlo en NavBar
import {useContext, React} from "react";
import './CartWidget.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";
import Badge from 'react-bootstrap/Badge';
import { cartContext } from "../../context/cartContext";

function CartWidget (prop) {
    const {cartCount} = useContext(cartContext);
    const quantity = cartCount();

    return(
        <div className="cartItem">
            <FontAwesomeIcon icon={ faCartShopping } />
            {quantity !== 0 && <Badge pill className="itemsCounter" bg="light" text="dark">{quantity}</Badge>}
        </div>
    )
}

export default CartWidget;