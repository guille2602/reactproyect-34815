import React from "react";
import Item from "./Item.js";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function ItemList () {
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
}

export default ItemList;