import React from "react";
import Slider from "react-slick";
import ImageShadow from 'react-image-shadow';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-image-shadow/assets/index.css';
import StarIcon from '@material-ui/icons/Star';

import fordVsFerrari from '../assets/images/ford-vs-ferrari.png'
import downhill from '../assets/images/downhill.png'
import theCallOfTheWild from '../assets/images/the-call-of-the-wild.png'

export default function SimpleSlider() {
  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 500,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "0px",
          slidesToScroll: 1,
          infinite: true,
          lazyLoad: true,
        }
      },
    ]
  };
  return (
    <div>
      <Slider {...settings} >
        <div>
          <ImageShadow src={fordVsFerrari} style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: 50, }} />
          <StarIcon style={{ color: '#FCC419' }} />
        </div>
        <div>
          <ImageShadow src={downhill} style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: 50, }} />
          <StarIcon style={{ color: '#FCC419' }} />
        </div>
        <div>
          <ImageShadow src={theCallOfTheWild} style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: 50, }} />
          <StarIcon style={{ color: '#FCC419' }} />
        </div>
      </Slider>
    </div>
  );
}