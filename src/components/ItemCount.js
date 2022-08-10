import React from "react";
import "../css/micss.css"


function ItemCount(props) {

    const [cout ,setcout] = React.useState(1);

   function aumentarContador ()  {
    setcout(cout+ 1);
      };

      function diminuirContador ()  {
        cout != 0 ? setcout(cout - 1): setcout(cout = 0)
      };
    
  
    return(
        <>
          <div >
            <label>
            <button  class="text-center" onClick={diminuirContador}>-</button>
            <input   type="number" class="text-center" min="1" value={cout} />
            <button  class="text-center" onClick={aumentarContador }>+ </button>
            </label>
            <h3> Stock {props.stock}</h3>
          </div>
        </>
    )
}

export default ItemCount;