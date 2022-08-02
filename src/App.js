
import logo from './logo.svg';
import './App.css';
import  Footer01 from './components/Footer01';
import  Navbar from './components/Navbar.js';
import ItemListContainer from './components/ItemListContainer.js';



function App() {
  return (
    <>
   <Navbar />  
   <ItemListContainer />
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
     <Footer01 />
    {/* </footer> */}
    </> 
  );
}

export default App;
