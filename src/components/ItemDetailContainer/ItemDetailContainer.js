import React from "react";
import {useEffect, useState} from "react";
import {getItem} from "../../services/firebase.js";
import ItemDetail from "./ItemDetail.js";
import {useParams} from "react-router-dom";
import { Waveform } from '@uiball/loaders';
import "./itemDetailContainer.css";

//Renderizar contenedor de cards de productos
function ItemDetailContainer (props) {

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);
    const {id} = useParams();

    useEffect(()=>{loadItem()});

    async function loadItem() {
        const prod = await getItem(id);
        setProduct(prod)
        setLoading(false);
    }

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
        <ItemDetail product={product}/>
    )
};

export default ItemDetailContainer;