import React from "react";
import imagen01 from '../asset/camisa01.png'
import ItemCount from './ItemCount';
import cart from './Cart'
import { Link } from "react-router-dom";

function ItemDetail(props) {
    const [existencia, setexistencia] = React.useState(35)
    console.log(props)
    function diminuirStock ()  {
        existencia != 0 ? setexistencia(existencia - 1): setexistencia(existencia= 0)
      };

    return(
        <>
       <div className="flexRow">
        <div className="card" >
         <br/>   
         <h3> Detalle del producto</h3> 
           <img src=""/> 
           <div className="card-body">
                <h5 className="card-text text-secondary">REF:{window.ref}</h5>
                <p>Moneda : USD</p>
                <p>Precio : 32</p>
                <p>Tallas : S,M,X,XLS</p>
                <p>Colores: Azul,Verde,Negra</p>
                <ItemCount  stock={existencia}/> 
                <button className="button" onClick={diminuirStock}> Agregar al carrito</button>
                <Link to="/Cart/">
                <button className="button"> Terminar la compra</button>
                </Link>
            </div>
        </div>
        </div>
        </>
    )
}
export default ItemDetail;