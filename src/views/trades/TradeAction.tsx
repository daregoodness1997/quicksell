import { motion } from 'framer-motion';
import React from 'react';
import { Button } from '../../components';
import { modalAnimation } from '../../components/modal';

const TradeAction = () => {
  return (
    <motion.div
      variants={modalAnimation}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='trade-action'
    >
      <div className='group'>
        <Button label='Trade Now' size='md' variant='solid' />
      </div>
    </motion.div>
  );
};

export default TradeAction;
