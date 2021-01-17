import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from "react-slick";
import ImageShadow from 'react-image-shadow';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-image-shadow/assets/index.css';
import StarIcon from '@material-ui/icons/Star';

import fordVFerrari from '../assets/images/ford-v-ferrari.png'
import downhill from '../assets/images/downhill.png'
import theCallOfTheWild from '../assets/images/the-call-of-the-wild.png'

const useStyles = makeStyles(theme => ({
  wrapIcon: {
    verticalAlign: 'middle',
    display: 'inline-flex'
  }
}));

export default function SimpleSlider() {
  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 2,
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

  const classes = useStyles()

  return (
    <div style={{ marginBottom: 100 }}>
      <Slider {...settings} >
        <div>
          <ImageShadow shadowHover={true} shadowBlur={40} shadowRadius={50} src={fordVFerrari} style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: 50, marginTop: 10 }} />
          <Typography variant='h4' style={{ marginBottom: 10 }}>Ford v Ferrari</Typography>
          <Typography variant="subtitle1" className={classes.wrapIcon}>
            <StarIcon style={{ color: '#FCC419', marginRight: 8 }} /> 4.8
          </Typography>
        </div>
        <div>
          <ImageShadow shadowHover={true} shadowBlur={40} shadowRadius={50} src={downhill} style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: 50, marginTop: 10 }} />
          <Typography variant='h4' style={{ marginBottom: 10 }}>Downhill</Typography>
          <Typography variant="subtitle1" className={classes.wrapIcon}>
            <StarIcon style={{ color: '#FCC419', marginRight: 8 }} /> 4.8
          </Typography>
        </div>
        <div>
          <ImageShadow shadowHover={true} shadowBlur={40} shadowRadius={50} src={theCallOfTheWild} style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: 50, marginTop: 10 }} />
          <Typography variant='h4' style={{ marginBottom: 10 }}>The Call of The Wild</Typography>
          <Typography variant="subtitle1" className={classes.wrapIcon}>
            <StarIcon style={{ color: '#FCC419', marginRight: 8 }} /> 4.8
          </Typography>
        </div>
      </Slider>
    </div>
  );
}