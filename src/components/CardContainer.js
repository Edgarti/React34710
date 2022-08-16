
import itemsData  from "./Data/Data.js";
import React, {useEffect, useState} from "react"
import Card from './Card'

function getArticulo() {
    return new Promise((resolve)=>{
        setTimeout(()=>
            resolve(itemsData),1)
    }

    ) 
}

function CardContainer() {
    const [articulo, setArticulo] = useState([]);
    useEffect(()=>{
            getArticulo().then((respuesta)=> {
                  setArticulo(respuesta)
                })
        },[])

    return(
       <>
        <div className='container'>       
           <div className='row'>
                {/* <div className='col-md-4'> */}
                 {/* {articulo.map(name => <h2>{name.title}</h2>)}  */}
                 {/* {articulo.map(name => <Card />)} */}
                 {articulo.map(name => 
                 <div className='col-md-4'>
                 <Card name={name.title} img={name.imagen}/>
                 </div>
                 )
                 
                 }
                 {/* {articulo.map((items) =>{
                           <Card ref =items.title,vlr=items.price />})
                        }
                  */}
                {/* </div> */}
            </div> 
         </div> 
        </>
    )
}
export default CardContainer;