import { motion } from 'framer-motion';
import React from 'react';
import AppButton from '../../components/button/AppButton';

interface Props {
  onClick?: (e: any) => void;
}

const TradeAction: React.FC<Props> = ({ onClick }) => {
  return (
    <motion.div className='trade-action'>
      <div className='group center'>
        <AppButton
          label='Trade Now'
          size='md'
          variant='solid'
          onClick={onClick}
          sx={{ margin: '0 auto' }}
        />
      </div>
    </motion.div>
  );
};

export default TradeAction;
