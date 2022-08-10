import itemsData  from "./Data/Data.js";
import React, {useEffect, useState} from "react"


function getProductos() {
    return new Promise((resolve)=>{
        setTimeout(()=>
            resolve(itemsData),2000)
    }
    ) 
}

function ItemListContainer(props) {
    const [datos, setDatos] = useState([]);
    useEffect(()=>{
            getProductos().then((respuesta)=> {
                  setDatos(respuesta)
                  console.log(datos)
                })
        },[])
 

    return(
        <>
        <h1>{props.saludo}</h1>
        <hr/>
        <h2> Productos</h2>
        <p>Codigo: {datos[0].id}</p>
        <p>Ref: {datos[0].title}</p>
        <p>Valor: {datos[0].price}</p>
        <p>Moneda: {datos[0].moneda}</p>
        <p>Stock: {datos[0].stock}</p>

        <button className="button"> Detalle del producto</button>
        <hr/>
        </>
    )
}

export default ItemListContainer;