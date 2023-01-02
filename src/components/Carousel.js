import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';
import React,{useState} from 'react';
import {useEffect} from "react";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

import './gallery.css';

import CloseIcon from '@mui/icons-material/Close';
import JsonData from '../serviceImageGallery.json'

import headerVideo0 from '../assets/slide_rag.mp4';
import headerVideo1 from '../assets/slide1.mp4';
import headerVideo2 from '../assets/slide_da2.mp4';
import headerVideo3 from '../assets/slide_tower.mp4';




const MyCarousel = () => {
    var items = [
        {
            name: "Ship In Fog",
            file: headerVideo1,
            description: "2d Fog Scene!"
        },
        {
            name: "Misc Prep Shots",
            file: headerVideo2,
            description: "Digital Apes!"
        },
        {
            name: "Light House",
            file: headerVideo3,
            description: "Shephard seq!"
        }
    ]
    
    return (
        <>
        <Carousel interval={5000} >
            {items.map((item,index)=> {
                // console.log(item.src);
                return (
                    <div className ="pics" key={index} style={{textAlign:'center'}} >
                        <video src={item.file} autoPlay loop muted />
                        {item.name} | {item.description}
                    </div>
                )
            })}
        </Carousel>

        
        </>
    )

}

// export default Gallery
export default MyCarousel;