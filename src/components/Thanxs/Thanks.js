import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Waveform } from '@uiball/loaders';
import { getOrder } from "../../services/firebase";
import { convertToARSMoneyFormat } from "../../context/cartContext";
import "./thanks.css"

function Thanxs () {
    const orderId = useParams().orderid;
    const [order, setOrder] = useState(null);

    useEffect(()=>{getOrderInfo()});
    
    async function getOrderInfo() {
        const orderInfo = await getOrder(orderId);
        if (orderInfo) {
            setOrder(orderInfo);
        }
    }
    
    if (order === null) return (
        <div className="anim-position">
            <Waveform 
                size={40}
                lineWeight={3.5}
                speed={1} 
                color="black" 
            />
        </div>
    );

    if (order === -1) return (
        <div className="pageBody">
            <div className="container custContainer py-5">
                <h4 className="text-center my-3 greetings">Pedido no encontrado.</h4>
                <Link to="/"><button type="button" className="btn custom mt-3">Volver a la tienda</button></Link>
            </div>
        </div>
    );    
    
    return (
        <div className="pageBody">
            <div className="container custContainer py-5">
                <h1 className="text-center my-3 greetings">¡Gracias por su compra!</h1>
                <div className="mt-4 px-5">
                    <p className="idInfo text-center pb-3">
                        El número de identificación de su pedido es: <br/><strong>{order.id}</strong>
                    </p>
                    <p className="detailedInfo text-center mb-3"><strong>Información del pedido:</strong></p>
                    <p>    
                        <strong>Comprador:</strong> {order.buyer.name}<br/>
                        <strong>Datos de contacto: </strong>{order.buyer.email} / {order.buyer.phone}<br/>
                        <strong>Fecha:</strong> {order.date.toDate().toLocaleString()}<br/>
                        <strong>Precio total:</strong> {convertToARSMoneyFormat(order.total)}<br/>
                        <strong>Estado:</strong> {convertToARSMoneyFormat(order.status)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Thanxs;