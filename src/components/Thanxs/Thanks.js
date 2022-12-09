import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Waveform } from '@uiball/loaders';
import { getOrder } from "../../services/firebase";

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
        <h1>Pedido no encontrado</h1>
    );    
    
    return (
        <div className="container">
            <h1>¡Gracias por su compra!</h1>
            <h2>El número de identificación de su pedido es {order.id}</h2>
        </div>
    )
}

export default Thanxs;