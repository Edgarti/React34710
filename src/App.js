
import logo from './logo.svg';
import './App.css';
import  Footer01 from './components/Footer01';
import  Navbar from './components/Navbar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemCount from './components/ItemCount';
import { BrowserRouter, Routes,Route } from "react-router-dom";



function App() {
  return (
    <>
   <div style={{padding: 10, height: 350, textAlign: "center"}}>
    <BrowserRouter>
     <Navbar/>
        <Routes>
         <Route path="/" element={ <ItemListContainer saludo="Saludo desde el componente App-props"/>}/>
         <Route path="/contador" element={ <ItemCount initial={1} stock={35}/>}/>
       </Routes>
       <ItemCount initial={1} stock={35}/>
      <Footer01 />
    </BrowserRouter>
   </div>
  
    {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"c
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/}
    {/* <footer> */}
     
    {/* </footer> */}
    </> 
  );
}

export default App;
