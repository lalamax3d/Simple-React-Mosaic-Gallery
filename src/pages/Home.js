//import Gallery from './Gallery';
// import Navbar from '../components/Nav';
import VideoGallery from '../components/VideoGallery';
import headerVideo1 from '../assets/slide_rag.mp4';
import './Home.css';

export function Home() {
    return (
        <>
        <h1 style={{textAlign:'center'}}>Home Page Content</h1>
        
        <div className="container">
            {/* <div className="overlay"></div> */}
            <video src={headerVideo1} autoPlay loop muted />

            {/* <div className="content">
                <h1>Header</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                <button>Button</button>
            </div> */}
            {/* </video> */}
        </div>
        <h1 style={{textAlign:'center'}}>Videos Listing</h1>
        </>
    );
}
export default Home;