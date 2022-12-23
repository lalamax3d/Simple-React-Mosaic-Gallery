import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';
import React,{useState} from 'react';
import {useEffect} from "react";

import './gallery.css';

import CloseIcon from '@mui/icons-material/Close';

import img01 from './img/img_01.png';
import img02 from './img/img_02.png';
import img03 from './img/img_03.png';
import img04 from './img/img_04.png';
import img05 from './img/img_05.png';

// import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';

import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import JsonData from './images.json'
const Gallery = ({scrollPosition}) => {
    useEffect(() => {
        const color = getComputedStyle(document.documentElement).getPropertyValue('--logo-color');
        console.log("Color:",color);
        const numColumns = getComputedStyle(document.documentElement).getPropertyValue('--numColumns');        // console.log("hi");
        console.log("Columns: ", numColumns);
      }, []);
    
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
    
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.id}</td>
                    <td>{info.name}</td>
                    <td>{info.city}</td>
                </tr>
            )
        }
    )
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) => {
        // console.warn(imgSrc);
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    return (
        <>
        {/* <h2 style={{textAlign:'center'}}> Number of Columns</h2> */}
        <Grid container justifyContent="flex-end">
            {/* <Button variant="contained" onClick={() => setColor('orange')}>Contained</Button> */}
            <h3>Number of Columns: </h3>
        <div className='sliderDiv' >
            <Slider defaultValue={5} aria-label="Default" 
                steps={1} min={3} max={8} valueLabelDisplay="auto" 
                onChange={handleOSizeChange}
            />
        </div>
        </Grid>
        {/* <Box sx={{  justifyContent:"flex-end" }}>
            <Button variant="contained" onClick={() => setColor('orange')}>Contained2</Button>
            <Button variant="contained" onClick={() => setColor('orange')}>Contained3</Button>
        </Box> */}
        <div className={model? "model open" : "model"}>
            <img src={tempImgSrc} alt={tempImgSrc} />
            <CloseIcon onClick={()=>setModel(false)}/>
        </div>
        
        <div className='gallery'>
            {JsonData.map((each,index)=> {
                // console.log(each.src);
                return (
                    <div className ="pics" key={index} onClick={()=>getImg(each.src)}>
                        {/* <img src={each.src} style={{width:'100%'}} />  */}
                        <LazyLoadImage
                            // alt={image.alt}
                            // height={image.height}
                            effect="blur"
                            alt={each.alt}
                            src={each.src} // use normal <img> attributes as props
                            height={each.height}
                            scrollPosition={scrollPosition}
                            width={each.width}
                            style={{width:'100%'}} />
                    </div>
                )
            })}
        </div>

        
        </>
    )

}

// export default Gallery
export default trackWindowScroll(Gallery);