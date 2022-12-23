// import logo from './logo.svg';
import React from 'react';
import {useEffect} from "react";
import './App.css';
import Gallery from './Gallery';
// import trackWindowScroll from './Gallery';
import JsonDataDisplay from './GeekTable';
// import Slider from '@mui/material/Slider';
// or
// import { Slider } from '@mui/material';


function App() {
  

  return (
    // <React.Fragment>
    <>
      
      <h1 style={{textAlign:'center'}}> Image Gallery</h1>
      
     
        
      <Gallery/>
    </>
    // {/* </React.Fragment> */}

  );
}

export default App;
