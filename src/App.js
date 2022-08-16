

import './App.css';
import  Footer01 from './components/Footer01';
import  Navbar from './components/Navbar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemCount from './components/ItemCount';
import ItemDetail from './components/ItemDetail'
import { BrowserRouter, Routes,Route } from "react-router-dom";

import ItemDetailContainer from './components/ItemDetailContainer.js'


function App() {
  return (
    <>
     <div style={{padding: 10, height: 350, textAlign: "center"}}>
  <BrowserRouter> 
     <Navbar/>
         <Routes> 
          
           <Route path="/" element={ <ItemDetailContainer />}/>
           <Route path="/list" element={ <ItemListContainer saludo="Saludo desde el componente App-props"/>}/>  
           <Route path="/contador" element={ <ItemCount initial={1} stock={35}/>}/> 
           <Route path="/ItemDetail" element={ <ItemDetail />}/> 
           <Route path="*" element={<h1>404: No encontrado</h1>} />
           {/* <Route path="/ItemDetail" element={ <ItemDetail />}/>  */}
        </Routes> 
      <ItemCount initial={1} stock={35}/>
     <Footer01 /> 
   </BrowserRouter> 
   </div>
  </>
  )
}

export default App;
