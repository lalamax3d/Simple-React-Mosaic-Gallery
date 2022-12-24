import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';
import React,{useState} from 'react';
import {useEffect} from "react";

import './gallery.css';

import CloseIcon from '@mui/icons-material/Close';
import Slider from '@mui/material/Slider';
// import Button from '@mui/material/Button';


import getVideos from '../serviceVideoGallery.js';


const VideoGallery = () => {
    useEffect(() => {
        const color = getComputedStyle(document.documentElement).getPropertyValue('--logo-color');
        console.log("Color:",color);
        const numColumns = getComputedStyle(document.documentElement).getPropertyValue('--numColumns');        // console.log("hi");
        console.log("Columns: ", numColumns);
      }, []);

    const vidoes = getVideos();

    function handleOSizeChange(event) {
        console.log(event.target.value);
        document.documentElement.style.setProperty('--numColumns', `${event.target.value}`)
        const colPercent = 100/event.target.value;
        document.documentElement.style.setProperty('--colPercent', `${colPercent}%`)
        // console.log('comeone')
    }
      function setColor(newColor) {
        document.documentElement.style.setProperty('--logo-color', newColor);
    }

    return (
        <>
        <div className='vgallery'>
            
        </div>

        
        </>
    )

}

// export default Gallery
export default VideoGallery;