import React from 'react';
import Skeleton from 'react-loading-skeleton';
import SkeletalLoader from '../skeletal';

interface AuctionCardProps {
  title: string;
  minBids: string;
  topBids: string;
  instantBuy: string;
  auctionType: string;
  duration: string;
}

const AuctionCard: React.FC<AuctionCardProps> = ({
  title,
  minBids,
  topBids,
  instantBuy,
  auctionType,
  duration,
}) => {
  return (
    <div className='card auction-card '>
      <div className='img-container'>
        <img src='assets/img/qc-logo.png' alt='' />
      </div>

      {/* Start Left Content */}
      <div>
        <p className='auction-name'>
          {title || <SkeletalLoader />}
          Haunted Einstein
        </p>

        <div className='flex auction-flex'>
          {/* {minBids ? (
            <div>
              <small>Top Bids</small>
              <h5>10 Keys</h5>
            </div>
          ) : (
            <SkeletalLoader height={'40px'} />
          )} */}

          <SkeletalLoader height={'40px'} />

          <div>
            <small>Min Bids</small>
            <h5>10 Keys</h5>
          </div>
          <div className='instant-buy'>
            <small>Top Bids</small>
            <h5>10 Keys</h5>
          </div>
        </div>

        <div className='flex bottom'>
          <div className='flex space-between'>
            <div className='auction-flex-sub'>
              <small>Price steps</small>
              <small>No</small>
            </div>
            <div className='auction-flex-sub'>
              <small>Accepting</small>
              <small>All</small>
            </div>
          </div>

          {/* Break */}

          <div className='flex space-between bottom-text'>
            <div className='auction-flex-sub'>
              <small>Type</small>
              <small>Fast Auction</small>
            </div>

            <div className='auction-flex-sub'>
              <small>Duration</small>
              <small>10 hrs</small>
            </div>
          </div>
        </div>

        <div className='flex space-between bottom-wrapper'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg1OFGfAFrxNsDHMsG83hVqkMgqEeJC9Gj42F4GEffFQ&s'
            alt=''
            className='auction-avatar'
          />
          <div>
            <i className='bi bi-clock-fill green-text'></i>
            <small className='green-text'> 10 hrs</small>
          </div>

          <button className='green-text'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-database-fill green-text'
              viewBox='0 0 16 16'
            >
              <path d='M3.904 1.777C4.978 1.289 6.427 1 8 1s3.022.289 4.096.777C13.125 2.245 14 2.993 14 4s-.875 1.755-1.904 2.223C11.022 6.711 9.573 7 8 7s-3.022-.289-4.096-.777C2.875 5.755 2 5.007 2 4s.875-1.755 1.904-2.223Z' />
              <path d='M2 6.161V7c0 1.007.875 1.755 1.904 2.223C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777C13.125 8.755 14 8.007 14 7v-.839c-.457.432-1.004.751-1.49.972C11.278 7.693 9.682 8 8 8s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972Z' />
              <path d='M2 9.161V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13s3.022-.289 4.096-.777C13.125 11.755 14 11.007 14 10v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972Z' />
              <path d='M2 12.161V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972Z' />
            </svg>
            Add
          </button>
        </div>
      </div>
      {/* End Left Content */}
    </div>
  );
};

export default AuctionCard;
