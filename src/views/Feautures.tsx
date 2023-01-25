import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Button } from '../components';
import { TradeCard } from '../components/cards';
import AuctionCard from '../components/cards/AuctionCard';
import GiveawayCard from '../components/cards/GiveawayCard';
import { AuctionIcon, GiveawayIcon } from '../components/icons';
import { tradeItems } from '../utils/data';

const Feautures = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
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
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const giveawaySettings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const auctionSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
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
          {tradeItems.map(item => (
            <TradeCard isMockup={true} {...item} />
          ))}
        </Slider>
      </div>

      {/* Trade Section */}
      <div className='sub-section'>
        <div className='trade-header'>
          <h2>Trade anywhere with great value</h2>
          <p>
            Store prices are up to 30% cheaper, and there are no hidden charges
            or suprises.
          </p>
        </div>

        <div className='content flex  '>
          <div className='box-1'>
            <h3>Trade</h3>
            <p>
              Simply select the items you want to uptrade the choose the items
              you want to receive then your trade goes through instantly
            </p>
            <div className='bottom-wrapper'>
              <Button label='Trade Now' />
            </div>
          </div>
          <div className='box-1'>
            <img src='assets/img/trades-mockup.png' alt='Trades Mockup' />
          </div>
        </div>
      </div>

      {/* Auctions Section */}

      <div className='sub-section'>
        <div className='trade-header'>
          <div className='flex gap-2'>
            <AuctionIcon />
            <h2> Auctions</h2>
          </div>
          <p>
            You can always auction your items and get the best offers and sell
            to the highest bidder
          </p>
        </div>

        <div className='header flex'>
          <h3>Featured Auctions</h3>
          <Link to='/trade' className='green-text'>
            See All Items
          </Link>
        </div>

        <div className='slider-box'>
          <Slider {...auctionSettings}>
            <AuctionCard title='Test Bid' minBids='20' />
            <AuctionCard title='Test Bid' minBids='20' />
            <AuctionCard title='Test Bid' minBids='20' />
            <AuctionCard title='Test Bid' minBids='20' />
            <AuctionCard title='Test Bid' minBids='20' />
            <AuctionCard title='Test Bid' minBids='20' />
          </Slider>
        </div>
      </div>

      {/* Giveways Section */}

      <div className='sub-section giveaways'>
        <div className='trade-header'>
          <div className='flex gap-2'>
            <GiveawayIcon />
            <h3>Giveaways</h3>
          </div>
          <p>
            You can enter giveaways and also give out items to the community
            that you do not need
          </p>
        </div>

        <div className='header flex'>
          <h3>Featured Giveaways</h3>
          <Link to='/giveaways' className='green-text'>
            See All Items
          </Link>
        </div>

        <div className='slider-box'>
          <Slider {...giveawaySettings}>
            <GiveawayCard />
            <GiveawayCard />
            <GiveawayCard />
            <GiveawayCard />
            <GiveawayCard />
            <GiveawayCard />
            <GiveawayCard />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Feautures;
