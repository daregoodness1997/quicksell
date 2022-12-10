import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Button } from '../components';
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

      {/* Trade Section */}
      <div className='trade'>
        <div className='trade-header'>
          <h2>Trade anywhere with great value</h2>
          <p>
            Store prices are up to 30% cheaper, and there are no hidden charges
            or suprises.
          </p>
        </div>

        <div className='content flex '>
          <div className='box-1'>
            <h3>Trade</h3>
            <p>
              Simply select the items you want to uptrade the choose the items
              you want to receive then your trade goes through instantly
            </p>
            <div className='bottom-wrapper'>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feautures;
