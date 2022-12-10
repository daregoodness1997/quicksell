import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { TradeCard } from '../components/cards';

const Feautures = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='container features'>
      <div className='header flex'>
        <h2>Features</h2>
        <Link to='/trade' className='green-text'>
          See All Items
        </Link>
      </div>
      <div className='slider-box'>
        <Slider {...settings}>
          <TradeCard />
          <TradeCard />
          <TradeCard />
          <TradeCard />
          <TradeCard />
          <TradeCard />
          <TradeCard />
        </Slider>
      </div>
    </div>
  );
};

export default Feautures;
