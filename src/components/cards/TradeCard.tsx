import React, { useState } from 'react';
import Modal from '../modal';

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
  const [open, setOpen] = useState(false);

  const handleMousever = () => {
    setOpen(true);
  };
  return (
    <div>
      {/* <Modal open={open} setOpen={setOpen} title='Trade Now'>
        <p>Test Modal</p>
      </Modal> */}
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
    </div>
  );
};

export default TradeCard;
