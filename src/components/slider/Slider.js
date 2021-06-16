import React from 'react';
import Carousel from "@brainhubeu/react-carousel";
import '@brainhubeu/react-carousel/lib/style.css';
import slides from './Slides';
import './slider.css'

const Slider = () => {
    return (
        <div className="carousel-container">
            <div className="carousel-title">
                <h2>My Projects</h2>
                <h6>Click in the image to redirect to de web page or the repository</h6>
            </div>
            <Carousel
                plugins={['infinite', 'arrows']}
                slidesPrePage={2}
                animationSpeed={200}
                center
                slides={slides}
                breakpoints={{
                    1920: {
                        offset: 20,
                        itemWidth: 770,
                    },
                    1680: {
                        offset: 55,
                        itemWidth: 575,
                    },
                    960: {
                        plugins: ['infinite'],
                        itemWidth: 575,
                    },
                    510: {
                        plugins: ['infinite'],
                        offset: 28,
                        itemWidth: 365,
                    },
                }}
            />
        </div>
    )
}

export default Slider
