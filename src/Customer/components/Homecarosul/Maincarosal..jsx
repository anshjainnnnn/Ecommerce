import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { maincardata } from './MainCarsoual';
// Ensure the path is correct

const MainCarousel = () => {
    const items = maincardata.map((item) => (
        <img 
            className="cursor-pointer"
            role="presentation"
            src={item.image}
            alt={`Carousel item`}
        />
    ));

    return (
        <AliceCarousel
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={1000}
            infinite
        />
    );
};

export default MainCarousel;
