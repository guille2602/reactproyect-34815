import {useContext, React} from "react";
import { cartContext, convertToARSMoneyFormat } from "../../context/cartContext";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./cartView.css"
import CartElement from "./CartElement";
import { Link } from "react-router-dom";


function CartView() {
    const context = useContext(cartContext);
        if (context.cartCount() === 0) {
            return (
                <div className="flex-y">
                    <h2 className="colorGrey emptyCartH1 text-center">No hay elementos en el carrito</h2>
                    <Link to="/"><button type="button" className="btn custom mt-0">Volver a la tienda</button></Link>
                </div>
            )
        }
        else {
        return (
            <div className="custContainer container mb-5">
            <h4 className="text-center pt-4 pb-3 colorGrey">Carrito ({context.cartCount()})</h4>
            <hr className="mt-0 mb-2 mx-3"/>
                {
                    context.cart.map((item)=>(
                        <div key={item.id}>
                        <CartElement 
                        className='ms-auto col-sm-12 col-md-12 col-lg-12 col-xl-12'
                        product={item}>
                        </CartElement>
                        <hr className="mt-2 mb-2 mx-3"/>
                        </div>)
                    )
                }
            <h4 className="text-center pt-3 pb-4">Total a pagar: {convertToARSMoneyFormat(context.cartTotalPrice())}</h4>
            </div>)
        }  
}

export default CartView;