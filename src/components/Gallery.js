// import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';
import React from 'react';
import {useState, useEffect} from "react";
import './gallery.css';
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Slider from '@mui/material/Slider';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import Box from '@mui/material/Box';

import 'react-lazy-load-image-component/src/effects/blur.css';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';


// import GalleryFantasy from '../serviceImage_fantasy.json';
// import GalleryCharacter from '../serviceImage_character.json';
// import GalleryMoodboard from '../serviceImage_moodboard.json';
// import GalleryToons from '../serviceImage_toons.json';

import getImages from '../serviceImageGallery.js';


const Gallery = ({scrollPosition}) => {
    useEffect(() => {
        const color = getComputedStyle(document.documentElement).getPropertyValue('--logo-color');
        console.log("Color:",color);
        const numColumns = getComputedStyle(document.documentElement).getPropertyValue('--numColumns');        // console.log("hi");
        console.log("Columns: ", numColumns);
        setimgcounter(allImages.length);
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
    
    
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');
    const [imgcounter, setimgcounter] = useState(0);
    const getImg = (imgSrc) => {
        // console.warn(imgSrc);
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    const allImages = getImages();
    const [images, setimages] = useState(allImages);
    const DisplayData=images.map(
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
    const filteredImages = (catItem) => {
      const filteredItems = allImages.filter((curelement) => {
        let itemsList = curelement.tags.split(",");
        // console.log(itemsList);
        return itemsList.includes(catItem);
      });
      setimages(filteredItems);
      setimgcounter(filteredItems.length);
      console.log("FilteredItemsCount: ", filteredItems.length);
    };

    return (
        <>
        {/* <h2 style={{textAlign:'center'}}> Number of Columns</h2> */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            // minHeight: '20vh',
          }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Item style={{textAlign:'right'}}>{imgcounter} images listed</Item>
            </Grid>
            <Grid item xs={4}>
              <Item><h1 style={{textAlign:'center'}}>Concepts</h1></Item>
            </Grid>
              <Grid item xs={1}>
                <Item >
                  Columns #
                </Item>
              </Grid>
              <Grid item xs={2}>
                <Item>
                  <Slider defaultValue={5} aria-label="Default" 
                    steps={1} min={3} max={7} valueLabelDisplay="auto" 
                    onChange={handleOSizeChange}
                  />
                </Item>
              </Grid>
          </Grid>
      </Box>
        {/* <Box sx={{  justifyContent:"flex-end" }}>
            <Button variant="contained" onClick={() => setColor('orange')}>Contained2</Button>
            <Button variant="contained" onClick={() => setColor('orange')}>Contained3</Button>
        </Box> */}
        <ButtonGroup
          variant="text"
          aria-label="text button group"
          style={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={() => filteredImages("fantasy")}>Fantasy</Button>
            <Button onClick={() => filteredImages("moodboard")}>Moodboard</Button>
            <Button onClick={() => filteredImages("toon")}>Cute/Cartoon</Button>
            <Button onClick={() => filteredImages("character")}>Character</Button>
        </ButtonGroup>

        <div className={model? "model open" : "model"}>
            <img src={tempImgSrc} alt={tempImgSrc} />
            <CloseIcon onClick={()=>setModel(false)}/>
        </div>
        
        <div id="moodboards" className='gallery'>
            {images.map((each,index)=> {
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