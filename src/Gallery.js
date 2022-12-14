import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';
import React,{useState} from 'react';
import './gallery.css';

import CloseIcon from '@mui/icons-material/Close';

import img01 from './img/img_01.png';
import img02 from './img/img_02.png';
import img03 from './img/img_03.png';
import img04 from './img/img_04.png';
import img05 from './img/img_05.png';

const Gallery = () => {

    let data = [
        {
            id:1,
            imgSrc:img01,
        },
        {
            id:2,
            imgSrc:img02,
        },
        {
            id:3,
            imgSrc:img03,
        },
        {
            id:4,
            imgSrc:img04,
        },
        {
            id:5,
            imgSrc:img05,
        },
       
    ]
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
            <img src={tempImgSrc} />
            <CloseIcon onClick={()=>setModel(false)}/>
        </div>
        <div className='gallery'>
            {data.map((item,index)=> {
                return (
                    <div className ="pics" key={index} onClick={()=>getImg(item.imgSrc)}>
                        <img src={item.imgSrc} style={{width:'100%'}} /> 
                    </div>
                )
            })}
        </div>
        </>
    )

}

export default Gallery