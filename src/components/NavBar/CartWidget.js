//Rendering de un ícono Cart, hay que exportarlo para incluirlo en NavBar
import React from "react";
import './CartWidget.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";
import Badge from 'react-bootstrap/Badge';

function CartWidget (prop) {
    return(
        <div className="cartItem">
            <FontAwesomeIcon icon={ faCartShopping } />
            <Badge pill className="itemsCounter" bg="light" text="dark">{prop.counter}</Badge>
        </div>
    )
}

export default CartWidget;