
import { Link } from "react-router-dom";
import articuloData  from "./Data/Data.js";
import React, { useEffect, useState} from "react"
import imagen01 from '../asset/camisa01.png'
import imagen02 from '../asset/camisa02.png'
import "../css/micss.css"

function Card(props) {
    return(
        <>
        <div className="flexRow">
        <div className="card" >
           <img src={props.img}/> 
           <div className="card-body">
                <h5 className="card-text text-secondary">REF:{props.name} </h5>
                <Link to="/ItemDetail/">
                <button className="button"> Detalle del producto</button>
                </Link>
            </div>
        </div>
        </div>
        </> 
    )
}

export default Card