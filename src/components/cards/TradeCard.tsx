import React from 'react';

interface Props {
  name?: string;
  imageUrl?: string;
  keys?: string;
  refs?: string;
  color?: string;
}

const TradeCard: React.FC<Props> = ({ name, imageUrl, keys, refs, color }) => {
  return (
    <div className='card trade-card'>
      <img src='assets/img/qc-logo.png' alt='' />
      <p>{name}</p>
      <h3>
        {keys} Keys {refs} Refs
      </h3>
      <div className={`indicator ${color}`}></div>
    </div>
  );
};

export default TradeCard;
