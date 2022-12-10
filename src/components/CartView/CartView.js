import { useContext, React } from "react";
import { cartContext, convertToARSMoneyFormat } from "../../context/cartContext";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./cartView.css"
import CartElement from "./CartElement";
import { Link, useNavigate } from "react-router-dom";
import { createOrder } from "../../services/firebase";
import CartForm from "./cartForm/CartForm";

function CartView() {
    const context = useContext(cartContext);
    const navigate = useNavigate();

    async function handleCheckOut(data) {
        const order = {
            date: new Date(),
            buyer: data,
            items: context.cart,
            total: context.cartTotalPrice()
        };
        const confirmedOrder = await createOrder(order);
        navigate(`/thanks/${confirmedOrder.id}`);
        context.clear()
    }

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
            <>
                <div className="custContainer container mb-3">
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
                    <h4 className="text-center pt-3 pb-2">Total a pagar: {convertToARSMoneyFormat(context.cartTotalPrice())}</h4>
                    <hr className="mt-0 mb-3 mx-3"/>
                    <div className="flex-x">
                        <button 
                            className="btn btn-light col-sm-5 col-md-5 col-lg-5 col-xl-5 mb-3" 
                            onClick={context.clear}>
                                Vaciar el carrito
                        </button>
                        <CartForm onClick={handleCheckOut}>Finalizar compra</CartForm>
                    </div>
                </div>
            </>
        )
    }  
}

export default CartView;