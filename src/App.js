
import logo from './logo.svg';
import './App.css';
import  Footer01 from './Componente/Footer01';
import  Navbar from './Componente/Navbar.js';



function App() {
  return (
    <>
   <Navbar />  
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
    <footer>
     <Footer01 />
    </footer>
    </> 
  );
}

export default App;
