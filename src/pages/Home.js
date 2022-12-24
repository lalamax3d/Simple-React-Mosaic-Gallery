//import Gallery from './Gallery';
// import Navbar from '../components/Nav';
import headerVideo1 from '../assets/slide_rag.mp4';
import VideoGallery from '../components/VideoGallery';
import './Home.css';

export function Home() {
    return (
        <>
        <h1 style={{textAlign:'center'}}>Home Page Content</h1>
        
        <div className="container">
            <video src={headerVideo1} loop muted />
            {/* <video src={headerVideo1} autoPlay loop muted /> */}
        </div>
        <VideoGallery />
        </>
    );
}
export default Home;