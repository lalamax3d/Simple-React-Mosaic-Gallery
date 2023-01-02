//import Gallery from './Gallery';
// import Navbar from '../components/Nav';
import headerVideo1 from '../assets/slide_rag.mp4';
import MyCarousel from '../components/Carousel';
import StickyFooter from '../components/Footer';
import VideoGallery from '../components/VideoGallery';
import './Home.css';

export function Home() {
    return (
        <>
        {/* <h1 style={{textAlign:'center'}}>WORK SAMPLES</h1>
        <h3 style={{textAlign:'center'}}>Tracking | MatchMove | Set Extension | VFX | Compositing</h3> */}
        
        {/* <div className="container"> */}
            {/* <video src={headerVideo1} loop muted /> */}
            {/* <video src={headerVideo1} autoPlay loop muted /> */}
            {/* <p>some temp test</p> */}
        {/* </div> */}
        <MyCarousel />
        <VideoGallery name="main" />
        <StickyFooter />
        </>
    );
}
export default Home;