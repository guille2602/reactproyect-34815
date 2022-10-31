import React from "react";
import './ItemListContainer.css'

function ItemListContainer (props) {
    return (
        <div className="box">
            <h1 className="mainTitle">{props.greetings}</h1>
        </div>
    );
};

export default ItemListContainer;