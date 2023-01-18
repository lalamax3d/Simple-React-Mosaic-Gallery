import React from 'react';
import {useEffect,useState, useRef,createRef} from "react";
import './gallery.css';
// import 'react-html5video/dist/styles.css';
import './videoGalleryPlayer.css'
import { Grid, Box} from '@mui/material';
import Item from '@mui/material/Grid';
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Slider from '@mui/material/Slider';
import {DefaultPlayer as Video} from 'react-html5video';
import { FormControlUnstyledContext } from '@mui/base';

import getVideos from '../serviceVideoGallery.js';

const VideoGallery = (props) => {
  useEffect(() => {
    console.log("Video Gallery Loaded, msg from useEffect");
    setvcounter(vidoes.length);
    const vidColumns = getComputedStyle(document.documentElement).getPropertyValue('--numColumns');        // console.log("hi");
    console.log("Video Grid Columns: ", vidColumns);
    }, []);

    function handleOSizeChange(event) {
      console.log(event.target.value);
      document.documentElement.style.setProperty('--vidColumns', `${event.target.value}`)
      const vidPercent = 100/event.target.value;
      document.documentElement.style.setProperty('--vidPercent', `${vidPercent}%`)
      // console.log('comeone')
    }
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
    const [videos, setvideos] = useState(vidoes);
    const [vcounter, setvcounter] = useState(0);
    console.log("after main Vars Defined");

    const filteredVideos = (catItem) => {
      const filteredItems = vidoes.filter((curelement) => {
        let itemsList = curelement.category.split(",");
        // console.log(itemsList);
        return itemsList.includes(catItem);
      });
      setvideos(filteredItems);
      setvcounter(filteredItems.length);
      console.log("FilteredItemsCount: ", filteredItems.length);
    };
    console.log(props);
    return (
        <>
        {/* <h1 style={{textAlign:'center'}}>WORK SAMPLES</h1> */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            // minHeight: '20vh',
          }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Item style={{textAlign:'right'}}>{vcounter} videos listed</Item>
            </Grid>
            <Grid item xs={4}>
              <Item><h1 style={{textAlign:'center'}}>WORK SAMPLES</h1></Item>
            </Grid>
              <Grid item xs={1}>
                <Item >
                  Columns #
                </Item>
              </Grid>
              <Grid item xs={2}>
                <Item>
                  <Slider defaultValue={1} aria-label="Default" 
                    steps={1} min={1} max={2} valueLabelDisplay="auto" 
                    onChange={handleOSizeChange}
                  />
                </Item>
              </Grid>
          </Grid>
      </Box>
        <ButtonGroup
          variant="text"
          aria-label="text button group"
          style={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={() => filteredVideos("tracking")}>Tracking</Button>
        <Button onClick={() => filteredVideos("matchmove")}>Matchmove</Button>
        <Button onClick={() => filteredVideos("dmp")}>DMP/Prep</Button>
        <Button onClick={() => filteredVideos("animation")}>Animation</Button>
        <Button onClick={() => filteredVideos("lighting")}>Lighting</Button>
        <Button onClick={() => filteredVideos("vfx")}>vfx</Button>
        <Button onClick={() => filteredVideos("compositing")}>Compositing</Button>
        <Button onClick={() => filteredVideos("realtime")}>RealTime</Button>
        
      </ButtonGroup>
        {/* <p style={{textAlign:'center'}}>Tracking | MatchMove | Set Extension | VFX | Compositing</p> */}
        <div className='videoGallery'>
          {videos.map((each,index)=> {
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