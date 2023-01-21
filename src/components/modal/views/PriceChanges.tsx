import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '..';
import Button from '../../button';
import HorizontalCard from '../../cards/HorizontalCard';
interface Props {
  open: boolean;
  setOpen(value?: any): void;
}

const PriceChanges: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <Modal
      open={open}
      setOpen={setOpen}
      title='Price Changes'
      status='pending'
      subTitle='The Following item(s) prices have changed  '
    >
      <div className='modal-container'>
        <div className='content-container'>
          <HorizontalCard changes={true} />
          <HorizontalCard changes={true} />
          <HorizontalCard changes={true} />
          <HorizontalCard changes={true} />
        </div>
        <div className='button-group'>
          <Button logo={false} label='Proceed with trade' variant='solid' />
        </div>

        <div className='modal-footer'>
          <small>
            If you are having issues, please checkout our{' '}
            <Link to='support'>Support page</Link>
          </small>
        </div>
      </div>{' '}
    </Modal>
  );
};

export default PriceChanges;
