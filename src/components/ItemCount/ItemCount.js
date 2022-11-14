import React from "react";
import { useState } from "react";
import "./itemCount.css"

function ItemCount ({init, stock, title}) {

    const [count, setCount] = useState(init);

    function handleSubtract () {
        count > 1 && setCount(count-1)
    }

    function handleAdd () {
        count < stock && setCount(count + 1)
    }

    function onAdd (){console.log('')};
    
    return (
        <div className="col-sm-12 col-lg-8 col-xl-7 btn-group align-self-end mt-4">
            <button className="btn custom" onClick={handleSubtract}>-</button>
            <span className="btn custom">{count}</span>
            <button className="btn custom" onClick={handleAdd}>+</button>
            <button className="btn custom" onClick={onAdd}>{title}</button>
        </div>
    )
}

export default ItemCount;