//Importaciones
import React from "react";
import {useEffect, useState} from "react";
import './ItemListContainer.css'
import Item from "./Item.js";
import getItems, { getItemsByCategory } from "../../services/firebase.js";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { Waveform } from '@uiball/loaders';

//Renderizar contenedor de cards de productos
function ItemListContainer ({greetings}) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const { categoryid } = useParams();

    async function loadProducts() {
        
        let prods = categoryid === undefined
        ? await getItems()
        : await getItemsByCategory(categoryid);
        setProducts(prods);
        setLoading(false);
    }
    // eslint-disable-next-line 
    useEffect(()=>{loadProducts()},[categoryid]);

    if (loading) return (
        <div className="anim-position">
            <Waveform 
                size={40}
                lineWeight={3.5}
                speed={1} 
                color="black" 
            />
        </div>
    )

    return (
        <div className="ms-auto box">
            <h1 className="mainTitle">{greetings}</h1>
            <div className='prodsBox'>
  
            {products.map(({id, producto, precio, imgurl}) => {
                return (
                <Item 
                    className='ms-auto col-sm-12 col-md-4 col-lg-4 col-xl-4'
                    key ={id}
                    id={id}
                    name={producto}
                    price={precio}
                    imgurl={imgurl}>
                </Item>)
            })   
            }
            </div>
        </div>
    );
};

export default ItemListContainer;