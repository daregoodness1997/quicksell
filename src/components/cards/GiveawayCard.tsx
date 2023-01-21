import React from 'react';
import AvatarStack from '../avatar/AvatarStack';
import Button from '../button';

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
      <div className='img-container'>
        <img src='assets/img/qc-logo.png' alt={name} />
      </div>
      <p>{name}</p>
      <div className='center'>
        <h4>Sample Auth Giveaways </h4>
        <div>
          <button className='giveaway-cta'>Enter Giveaway</button>
        </div>
      </div>
      <AvatarStack />
    </div>
  );
};

export default GiveawayCard;
