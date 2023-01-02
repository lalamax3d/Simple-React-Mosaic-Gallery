// import logo from './logo.svg';
import React from 'react';
//import {useEffect} from "react";
import './App.css';
// import {Link,Route,Routes} from "react-router-dom";
// import { BrowserRouter } from 'react-router-dom';

import Nav from './components/Nav';
import { BrowserRouter , Route,Routes } from "react-router-dom";
import Home from './pages/Home';
import Concepts from './pages/Concepts';
import About from './pages/About';
import NotFound from './pages/NotFound';
import StickyFooter from './components/Footer';




function App() {
  

  return (
    <>
    {/* <nav>
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/concepts">Concepts</Link></li>
      </ul>
    </nav> 
       
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/concepts" element={<Concepts/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes> */}
    <BrowserRouter>
      <div className="App">
        <Nav />
      </div>
    <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/footer" component={<StickyFooter/>} />
          <Route path="/concepts" element={<Concepts/>} />
          <Route path="/about" element={<About/>} />
    </Routes>
    </BrowserRouter>
    </>

    

  );
}

export default App;



//<>
//<h1 style={{textAlign:'center'}}> Image Gallery</h1>
//<Gallery/>
//</>
