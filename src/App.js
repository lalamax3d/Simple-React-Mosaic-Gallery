// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Gallery from './Gallery';
// import trackWindowScroll from './Gallery';
import JsonDataDisplay from './GeekTable';


function App() {
  return (
    // <React.Fragment>
    <>
      <JsonDataDisplay/>
      <h1 style={{textAlign:'center'}}> Image Gallery</h1>
      <h2 style={{textAlign:'center'}}> Please Subscribe</h2>
      <Gallery/>
    </>
    // {/* </React.Fragment> */}

  );
}

export default App;
