import articuloData  from "./Data/Data.js";
import React, {useEffect, useState} from "react"
import CardContainer from './CardContainer.js'
import ItemDetail from "./ItemDetail.js";


function getArticulo() {
    return new Promise((resolve)=>{
        setTimeout(()=>
            resolve(articuloData[0]),2000)
    }
    ) 
}

function ItemDetailContainer() {
    const [articulo, setArticulo] = useState([]);
    useEffect(()=>{
            getArticulo().then((respuesta)=> {
                  setArticulo(respuesta)
                })
        },[])
 
    return(
        <>
        <h3> cardContainaer</h3>
           <CardContainer />   
         {/* <ItemDetail /> */}
        </>
    )
    
}

export default ItemDetailContainer