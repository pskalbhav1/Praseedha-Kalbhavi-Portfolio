import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from './1.jpg'
import image2 from './2.jpg'
import image3 from './3.jpg'
import image4 from './4.png'
import image5 from './5.png'
import image6 from './6.jpeg'
import image7 from './7.png'
import image8 from './8.png'
import image9 from './9.jpeg'
import image10 from './10.png'
import image11 from './11.jpeg'
import image12 from './12.jpeg'
import './App.css'


function Certificate() {
    return (
        <div classname="Certificate">
            <AliceCarousel autoPlay autoPlayInterval="3000">
                <img src={image1} className="sliderimg" alt="C-1" class="responsive"/>
                <img src={image2} className="sliderimg" alt="C-2" class="responsive"/>
                <img src={image3} className="sliderimg" alt="C-3" class="responsive"/>
                <img src={image4} className="sliderimg" alt="C-4" class="responsive"/>
                <img src={image5} className="sliderimg" alt="C-5" class="responsive"/>
                <img src={image7} className="sliderimg" alt="C-7" class="responsive"/>
                <img src={image8} className="sliderimg" alt="C-8" class="responsive"/>
                <img src={image10} className="sliderimg" alt="C-10" class="responsive"/>
                <img src={image6} className="sliderimg" alt="C-6" class="responsive"/>
                <img src={image9} className="sliderimg" alt="C-9" class="responsive"/>
                <img src={image11} className="sliderimg" alt="C-11" class="responsive"/>
                <img src={image12} className="sliderimg" alt="C-12" class="responsive"/>
            </AliceCarousel>
        </div>
    )

}
export default Certificate