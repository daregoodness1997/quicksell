import React from 'react';

interface Props {
  name?: string;
  imageUrl?: string;
  keys?: string;
  refs?: string;
  color?: string;
}

const GiveawayCard: React.FC<Props> = ({
  name,
  imageUrl,
  keys,
  refs,
  color,
}) => {
  return (
    <div className='card giveaway-card'>
      <i className='bi bi-clock-fill green-text'></i>
      <small> 10:00 Hours Remaining</small>
      <img src='assets/img/qc-logo.png' alt='' />
      <p>{name}</p>
      <h3>
        {keys} Keys {refs} Refs
      </h3>
      <div className={`indicator ${color}`}></div>
    </div>
  );
};

export default GiveawayCard;
