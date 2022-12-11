import React from 'react';

const AuctionCard = () => {
  return (
    <div className='card auction-card '>
      <div className='img-container'>
        <img src='assets/img/qc-logo.png' alt='' />
      </div>

      {/* Start Left Content */}
      <div>
        <p className='auction-name'>Haunted Einstein</p>

        <div className='flex auction-flex'>
          <div>
            <small>Top Bids</small>
            <h5>10 Keys</h5>
          </div>
          <div>
            <small>Top Bids</small>
            <h5>10 Keys</h5>
          </div>
          <div className='instant-buy'>
            <small>Top Bids</small>
            <h5>10 Keys</h5>
          </div>
        </div>

        <div className='flex'>
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

          <div className='flex space-between'>
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
        </div>
      </div>
      {/* End Left Content */}
    </div>
  );
};

export default AuctionCard;
