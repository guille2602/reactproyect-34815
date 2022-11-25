import React from "react";
import { useState } from "react";
import "./itemCount.css"

function ItemCount ({init, stock, title, onAdd, disableTitleBtn}) {

    const [count, setCount] = useState(init);

        function handleSubtract () {
            if (count > 1) {
                setCount(count - 1);
                disableTitleBtn && onAdd(count - 1);
            }
        }

    function handleAdd () {
        if (count < stock) {
            setCount(count + 1);
            disableTitleBtn && onAdd(count + 1);
        }
    }

    /*3. Agrego el eventListener al botón y le paso la función enviada del padre, le devuelvo el contador*/
    return (
        <div className="col-sm-12 col-md-12 col-lg-9 col-xl-7 btn-group align-self-end">
            <button className="btn custom" onClick={handleSubtract}>-</button>
            <span className="btn custom">{count}</span>
            <button className="btn custom" onClick={handleAdd}>+</button>
            {!disableTitleBtn && <button className="btn custom" onClick={()=> {onAdd(count); setCount(stock > 1? 1: 0)}}>{title}</button>}
        </div>
    )
}

export default ItemCount;