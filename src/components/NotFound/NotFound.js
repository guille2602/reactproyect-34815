import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './notFound.css'
import { Link } from 'react-router-dom'

function NotFound () {
    return (
        <div className="container-lg y-flex">
            <img className="row mb-0" src="/pictures/404.png" alt="404 Not Found"/>
            <Link to="/"><button type="button" className="btn custom mt-0">Volver a la tienda</button></Link>
        </div>
    )
}

export default NotFound;