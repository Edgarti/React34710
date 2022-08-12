// import React from "react";
import imagen01 from '../asset/camisa01.png'

function ItemDetail(moneda, valor) {
    return(
        <>
       
        <h2> Detalle del producto</h2>
        <p>Moneda : USD</p>
        <p>Precio : 32</p>
        <p>Tallas : S,M,X,XLS</p>
        <p>Colores: Azul,Verde,Negra</p>
        <img src={imagen01} alt=""/>
        </>
    )
}
export default ItemDetail;