import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';
import React,{useState} from 'react';

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

import JsonData from './images.json'
const Gallery = ({scrollPosition}) => {

    let data = [
        {
            id:1,
            alt:'img01',
            imgSrc:img01,
        },
        {
            id:2,
            alt:'img02',
            imgSrc:img02,
        },
        {
            id:3,
            alt:'img03',
            imgSrc:img03,
        },
        {
            id:4,
            alt:'img04',
            imgSrc:img04,
        },
        {
            id:5,
            alt:'img05',
            imgSrc:img05,
        },
       
    ]
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
        <div className={model? "model open" : "model"}>
            <img src={tempImgSrc} alt={tempImgSrc} />
            <CloseIcon onClick={()=>setModel(false)}/>
        </div>
        <div className='gallery'>
            {data.map((item,index)=> {
                return (
                    <div className ="pics" key={index} onClick={()=>getImg(item.imgSrc)}>
                        <img src={item.imgSrc} alt={item.alt} style={{width:'100%'}} /> 
                    </div>
                )
            })}
        </div>
        <div className='gallery'>
            {JsonData.map((each,index)=> {
                console.log(each.src);
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