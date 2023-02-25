import React from 'react';
import chevronR from '../../public/assets/chevron-right.png';
import chevronL from '../../public/assets/chevron-left.png';
import images from './images.json';
import './Carousel.css';


export default function Carousel() {
    const [index, setIndex] = React.useState(0);

    // move through slideshow every 3 seconds.
    React.useEffect( () => {
        const interval = setInterval(() => {sethaki
            chevBtn('right');
        }, 5000);

        return () => clearInterval(interval);
    }, [index]);

    const chevBtn = (dir) => {

        if (dir == 'left') {
            setIndex(index - 1);
            if (index <= 0) {
                setIndex(images.assets.length -1);
            }
        }

        else if (dir == 'right') {
            setIndex(index + 1);
            if (index >= images.assets.length -1 ) {
                setIndex(0);
            }
        }
    };

    return (

        <div className='outer-carousel'>
            <img src={chevronL} className='chevron' onClick={()=> chevBtn('left')}  /> 
                <div className='carousel-container'>
                    <img src={images.assets[index].url} className='carousel-image active' />
                </div>
            {/* <img src={chevronR} className='chevron' onClick={() => chevBtn('right')} /> */}
            <FontAwesomeIcon icon="fa-solid fa-chevron-right" onClick={() => chevBtn('right')}/>

        </div>
    )
}