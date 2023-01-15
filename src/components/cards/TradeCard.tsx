import React, { useState } from 'react';
import Tooltip from '../modal/ToolTip';

interface Props {
  name?: string;
  imageUrl?: string;
  keys?: string;
  refs?: string;
  color?: string;
  onTrade?: boolean;
  selectedOption?: { label: string; value: string; selected?: boolean };
  // setSelectedOption: (option: any) => void;
  option?: any;
  isMockup?: boolean;
}

const TradeCard: React.FC<Props> = ({
  name = 'Grounding Sword',
  imageUrl,
  keys = '10',
  refs = '120',
  color,
  onTrade,
  // setSelectedOption,
  selectedOption,
  option,
  isMockup,
}) => {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState(false);

  const handleMousever = () => {
    setOpen(true);
  };
  const handleMousLeave = () => {
    setOpen(false);
  };
  return (
    <div
      className={`trade-card-wrapper ${
        select || selectedOption?.selected ? 'selected' : 'transparent'
      }`}
      onClick={() => {
        setSelect(!select);
        // setSelectedOption({ ...option, selected: !selectedOption?.selected });
      }}
      onMouseOver={handleMousever}
      onMouseLeave={handleMousLeave}
    >
      <Tooltip open={open} setOpen={setOpen} title='Trade Now'>
        <p>Test Modal</p>
      </Tooltip>

      <div
        className={`card trade-card ${onTrade && 'list'} ${isMockup && 'mock'}`}
      >
        <img src={imageUrl || 'assets/img/qc-logo.png'} alt='' />
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
