//Importaciones
import React from "react";
import {useEffect, useState} from "react";
import './ItemListContainer.css'
import ItemList from "./ItemList.js";
import getItems, { getItemsByCategory } from "../../services/firebase.js";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { Waveform } from '@uiball/loaders';

//Renderizar contenedor de cards de productos
function ItemListContainer ({greetings}) {

    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true)
    const { categoryid } = useParams();

    async function loadProducts() {
        let prods = !categoryid
        ? await getItems()
        : await getItemsByCategory(categoryid);
        setProducts(prods);
        setLoading(false);
    }

    useEffect(() => {
        loadProducts();
    }, [categoryid]);

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
                <ItemList products={products}/>
            </div>
        </div>
    );
};

export default ItemListContainer;