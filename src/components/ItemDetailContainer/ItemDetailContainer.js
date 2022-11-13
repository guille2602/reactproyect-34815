import React from "react";
import {useEffect, useState} from "react";
import {getItem} from "../../services/mockService.js";
import ItemDetail from "./ItemDetail.js";
import {useParams} from "react-router-dom";

//Renderizar contenedor de cards de productos
function ItemDetailContainer (props) {

    const [product, setProduct] = useState([]);
    const {id} = useParams();

    async function loadItem() {
        const prod = await getItem(id);
        setProduct(prod)
    }

    useEffect(()=>{loadItem()},[]);

    return (
        <ItemDetail 
            key ={product.id}
            id = {product.id}
            producto={product.producto}
            categoria={product.categoria}
            precio={product.precio}
            stock={product.stock}
            info={product.info}>
        </ItemDetail>)
};

export default ItemDetailContainer;