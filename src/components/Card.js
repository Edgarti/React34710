
import { Link } from "react-router-dom";
import articuloData  from "./Data/Data.js";
import React, { useEffect, useState} from "react"
import imagen01 from '../asset/camisa01.png'
import imagen02 from '../asset/camisa02.png'

function getArticulo() {
    return new Promise((resolve)=>{
        setTimeout(()=>
            resolve(articuloData),1000)
            console.log(articuloData)

    }
    ) 
}


function Card() {
    const [Art, SetArt] = useState([]);
    useEffect(()=>{
            getArticulo().then((respuesta)=> {
                  SetArt(respuesta)
                  console.log(Art)
                })
        },[])

    return(
        <>
     
        <div className="flexRow">
        <div className="card" >
            <img src={imagen01} alt=""/>
            <div className="card-body">
             <h5 className="card-text text-secondary">REF: COD01</h5>
             <Link to="/ItemDetail" params={{ testvalue: "USD",precio: "20"}}>
             <button className="button"> Detalle del producto</button>
             </Link>
            </div>
        </div>
        <div className="card">
            <img src={imagen02} alt=""/>
            <div className="card-body">
             <h5 className="card-text text-secondary">REF: </h5>
             <Link to="/about">
             <button className="button"> Detalle del producto</button>
             </Link>
            </div>
        </div>
        </div>
     
        </>
        
    )
}
export default Card