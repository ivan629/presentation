import { map, find } from 'lodash';
import React, { memo } from 'react';
import Slider from 'react-slick';

import './Slider.scss'

const SimpleSlider = ({ autoplaySpeed, images, autoplay, sliderRef, newOrderIds }) => {
    const settings = {
        autoplay,
        infinite: false,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: autoplaySpeed,
        cssEase: "linear",
    };

    console.log(images, newOrderIds);

    const newImagesIds = newOrderIds.filter(id => images.find(image => image.id === id));

    return (
        <Slider {...settings} className="slider" ref={sliderRef}>
            {map(newImagesIds, (id) => (
                <img className="slider-image" key={id} id="output" alt="" src={find(images, { id }).imageBody} />
            ))}
        </Slider>
    );
};

export default memo(SimpleSlider);
