//import Gallery from './Gallery';
// import Navbar from '../components/Nav';
import headerVideo1 from '../assets/slide_rag.mp4';
import MyCarousel from '../components/Carousel';
import StickyFooter from '../components/Footer';
import VideoGallery from '../components/VideoGallery';
import VideoGallery2 from '../components/VideoGallery2';
import {  DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

// import getVideos from '../serviceVideoGallery.js';
// import getRTVideos from '../serviceRTGallery.js';


import './Home.css';

export function Home() {

    // const videos = getVideos();
    return (
        <>
        <MyCarousel />
        <VideoGallery name="main" />
        {/* <Element name="RT" className="element">
        <VideoGallery2 name="RT" />
        </Element> */}
        <StickyFooter />
        </>
    );
}
export default Home;