//Importaciones
import React from "react";
import {useEffect, useState} from "react";
import './ItemListContainer.css'
import Item from "./Item.js";
import getItems from "../../services/mockService.js";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';


//Renderizar contenedor de cards de productos
function ItemListContainer (props) {

    const [products, setProducts] = useState([]);
    
    const { categoryid } = useParams();

    async function loadProducts() {
        let prods = await getItems();
        if (categoryid !== undefined) {
            prods = prods.filter((prod)=> prod.categoria === categoryid)
        };
        setProducts(prods)
}

    useEffect(()=>{loadProducts()},[categoryid]);

    return (
        <div className="ms-auto box">
            <h1 className="mainTitle">{props.greetings}</h1>
            <div className='prodsBox'>
  
            {products.map(({id, producto, precio, imgurl}) => {
                const url = '/pictures/' + id + 'A.webp';
                return (
                <Item 
                    className='ms-auto col-sm-12 col-md-4 col-lg-4 col-xl-4'
                    key ={id}
                    id={id}
                    name={producto}
                    price={precio}
                    imgurl={url}>
                </Item>)
            })   
            }
            </div>
        </div>
    );
};

export default ItemListContainer;