import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from './1.jpg'
import image2 from './2.jpg'
import image3 from './3.jpg'
import image4 from './4.png'
import image5 from './5.png'
import image7 from './7.png'
import image8 from './8.png'
import image10 from './10.png'
import './App.css'


function Certificate() {
    return (
        <div classname="Certificate">
            <AliceCarousel autoPlay autoPlayInterval="3000">
                <img src={image1} className="sliderimg" alt="C-1"/>
                <img src={image2} className="sliderimg" alt="C-2"/>
                <img src={image3} className="sliderimg" alt="C-3"/>
                <img src={image4} className="sliderimg" alt="C-4"/>
                <img src={image5} className="sliderimg" alt="C-5"/>
                <img src={image7} className="sliderimg" alt="C-7"/>
                <img src={image8} className="sliderimg" alt="C-8"/>
                <img src={image10} className="sliderimg" alt="C-10"/>
            </AliceCarousel>
        </div>
    )

}
export default Certificate