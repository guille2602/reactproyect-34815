import React from "react";
import {useEffect, useState} from "react";
import {getItem} from "../../services/mockService.js";
import ItemDetail from "./ItemDetail";

//Renderizar contenedor de cards de productos
function ItemDetailContainer (props) {

    const [product, setProduct] = useState([]);
    
    async function loadItem() {
        const prod = await getItem();
        setProduct(prod)
    }

    useEffect(()=>{loadItem()},[]);

    return (
        <ItemDetail 
            key ={product.id}
            name={product.producto}
            price={product.precio}
            imgurl='https://http2.mlstatic.com/D_NQ_NP_600271-MLA50925971479_072022-O.webp'>
        </ItemDetail>)
};

export default ItemDetailContainer;