import React from 'react';

const AuctionCard = () => {
  return (
    <div className='card auction-card '>
      <div className='img-container'>
        <img src='assets/img/qc-logo.png' alt='' />
      </div>
      <div>
        <p className='auction-name'>Haunted Einstein</p>

        <div className='flex'>
          <div>
            <small>Top Bids</small>
            <h5>10 Keys</h5>
          </div>
          <div>
            <small>Top Bids</small>
            <h5>10 Keys</h5>
          </div>
          <div>
            <small>Top Bids</small>
            <h5>10 Keys</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionCard;
