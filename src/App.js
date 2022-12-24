// import logo from './logo.svg';
import React from 'react';
//import {useEffect} from "react";
import './App.css';
import {Link,Route,Routes} from "react-router-dom";
// import JsonDataDisplay from './GeekTable';
import Home from './pages/Home';
import Concepts from './pages/Concepts';
import NotFound from './pages/NotFound';
import Gallery from './components/Gallery';


function App() {
  

  return (
    <>
    <nav>
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/concepts">Concepts</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/concepts" element={<Concepts/>}/>
      {/* <Route path="" */}
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>

    

  );
}

export default App;



//<>
//<h1 style={{textAlign:'center'}}> Image Gallery</h1>
//<Gallery/>
//</>
