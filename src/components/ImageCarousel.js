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
  },
  movieImage: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 40,
    marginTop: 10
  },
  movieTitle: {
    marginBottom: 10
  },
  starIcon: {
    color: '#FCC419',
    marginRight: 8
  }
}));

const movies = [
  {
    id: 1,
    title: 'Ford v Ferrari',
    image: fordVFerrari,
    rating: '4.8'
  },
  {
    id: 2,
    title: 'Downhill',
    image: downhill,
    rating: '4.3'
  },
  {
    id: 3,
    title: 'The Call of The Wild',
    image: theCallOfTheWild,
    rating: '4.4'
  }
]

export default function SimpleSlider() {
  const classes = useStyles()

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

  const movieLists = movies.map((movie) => (
    <div key={movie.id}>
      <ImageShadow shadowHover={true} shadowBlur={40} shadowRadius={50} src={movie.image} className={classes.movieImage} />
      <Typography variant='h4' className={classes.movieTitle}>{movie.title}</Typography>
      <Typography variant="subtitle1" className={classes.wrapIcon}>
        <StarIcon className={classes.starIcon} /> {movie.rating}
      </Typography>
    </div>
  ))

  return (
    <div>
      <Slider {...settings} >
        {movieLists}
      </Slider>
    </div>
  );
}