import React from "react";
import Item from "./Item.js";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function ItemList ({ products }) {
    return(
        <>
        {
        products.map((product) => {
            return (
            <Item
                className='ms-auto col-sm-12 col-md-4 col-lg-4 col-xl-4'
                key ={product.id}
                id={product.id}
                name={product.producto}
                price={product.precio}
                imgurl={product.imgurl}>
            </Item>)
        })}   
    </>)
}

export default ItemList;