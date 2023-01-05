import React from 'react';

interface Props {
  name?: string;
  imageUrl?: string;
  keys?: string;
  refs?: string;
  color?: string;
  onTrade?: boolean;
}

const TradeCard: React.FC<Props> = ({
  name = 'Grounding Sword',
  imageUrl,
  keys = '10',
  refs = '120',
  color,
  onTrade,
}) => {
  const handleMousever = () => {};
  return (
    <div
      className={`card trade-card ${onTrade && 'list'}`}
      onMouseOver={handleMousever}
    >
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
