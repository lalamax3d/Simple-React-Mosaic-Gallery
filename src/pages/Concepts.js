import StickyFooter from '../components/Footer';
import Gallery from '../components/Gallery';
import MyCarousel from '../components/Carousel';


export function Concepts() {
    return (
        <>
            {/* <h1 style={{textAlign:'center'}}>Concepts</h1> */}
            <MyCarousel />
            <Gallery/>
            <StickyFooter/>
        </>
    );
}
export default Concepts;