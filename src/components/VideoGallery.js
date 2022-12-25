import React from 'react';
import {useEffect,useState, useRef,createRef} from "react";


// import CloseIcon from '@mui/icons-material/Close';
// import Slider from '@mui/material/Slider';
// import Button from '@mui/material/Button';
import {DefaultPlayer as Video} from 'react-html5video';
import './gallery.css';
// import 'react-html5video/dist/styles.css';
import './videoGalleryPlayer.css'

import getVideos from '../serviceVideoGallery.js';
import { FormControlUnstyledContext } from '@mui/base';


const VideoGallery = () => {
  useEffect(() => {
    console.log("Video Gallery Loaded");
    }, []);

    function videoDivClicked(event) {
      console.log(event.parentElement.parentElement.parentElement);
      // console.log(event.parentElement.parentElement.parentElement.className);
      // console.log(event.parentElement.parentElement.parentElement.innerHTML);
      console.log(event.parentElement.parentElement.parentElement['Video']);
      let element = event.parentElement.parentElement.parentElement;
      console.log(element.className)
      // let ve = element.getChildElementByTagName('Video');
      // let ve = element.getChildElementByTagName('Video');
      // console.log(ve);
      // console.log(event.parentElement.parentElement.parentElement.source);
      
    }

    const [model, setModel] = useState(false);

    const vidoes = getVideos();

    return (
        <>
        <h1 style={{textAlign:'center'}}>Videos Listing</h1>
        <div className='videoGallery'>
          {vidoes.map((each,index)=> {
              // console.log(each.src);
              // let divRef = useRef(null);
              let divRef = createRef(null);

              const openModel = () => {
                divRef.current.classList.remove('video');
                divRef.current.classList.add('model');
                setModel(true);
              }
              const closeModel = () => {
                divRef.current.classList.add('video');
                divRef.current.classList.remove('model');
                setModel(false);
              }

              return (
                <div ref={divRef} className ="video" key={index} >
                  {/* {model && <button className="model-close-btn" onClick={()=>closeModel()}>X</button> } */}
                  {/* <div className="videoContainer" onClick={()=>openModel()}> */}
                  <div className="videoContainer" onClick={e => videoDivClicked(e.target)}>
                    <Video
                      style={{width:'100%'}}
                      autoPlay={model}
                      controls={['PlayPause', 'Seek', 'Time', ]}
                      poster={each.poster}
                      >
                      <source src={each.src} type="video/mp4" />
                    </Video>
                  </div>
                </div>
              )
          })}
        </div>

        
        </>
    )

}

// export default Gallery
export default VideoGallery;