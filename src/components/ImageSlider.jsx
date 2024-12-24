import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../ImageSlider.css';
import { carouselDatas } from '../data';
import ImageSliderSingle from './ImageSliderSingle';

export default function ImageSlider() {
    const settings = {
        dots: true,
    };
    return (
        <div className="image-slider-container">
            <Slider {...settings}>
                {carouselDatas.map((carousel) => {
                    return (
                        <ImageSliderSingle {...carousel} />
                    )
                })}
            </Slider>
        </div>
    );
}
