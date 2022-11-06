//Importaciones
import React from "react";
import {useEffect, useState} from "react";
import './ItemListContainer.css'
import Item from "./Item.js";
import getItems from "../../services/mockService.js"


//Renderizar contenedor de cards de productos
function ItemListContainer (props) {

    const [products, setProducts] = useState([]);
    
    async function loadProducts() {
        const prods = await getItems();
        setProducts(prods)
    }

    useEffect(()=>{loadProducts()},[]);

    return (
        <div className="box">
            <h1 className="mainTitle">{props.greetings}</h1>
            <div>
            {products.map((prod) => {
                return (
                <Item 
                    key ={prod.id}
                    name={prod.producto}
                    price={prod.precio}
                    imgurl='https://http2.mlstatic.com/D_NQ_NP_600271-MLA50925971479_072022-O.webp'>
                </Item>)
            })   
            }
            </div>
        </div>
    );
};

export default ItemListContainer;