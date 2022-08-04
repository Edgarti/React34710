import React from "react";
import "../css/micss.css"


function ItemCount() {

    const [stock ,setStock] = React.useState(1);

   function aumentarContador ()  {
    setStock(stock + 1);
      };

      function diminuirContador ()  {
        stock != 0 ? setStock(stock - 1): setStock(stock = 1)
      };
    
  
    return(
        <>
          <div >
            <label>
            <button  class="text-center" onClick={diminuirContador}>-</button>
            <input   type="number" class="text-center" min="1" value={stock} />
            <button  class="text-center" onClick={aumentarContador }>+ </button>
            </label>
          </div>
        </>
    )
    
}

export default ItemCount;