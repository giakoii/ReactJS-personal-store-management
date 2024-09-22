import React from 'react';
import {Image} from "antd";
import Slider from "react-slick";

const SliderComponent = ({arrSliders}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    }
    return (
        <Slider {...settings}>
            {arrSliders.map((item) => {
                return(
                    <Image src={item} alt="slider" />
                )
            })}
        </Slider>
    );
};

export default SliderComponent;
