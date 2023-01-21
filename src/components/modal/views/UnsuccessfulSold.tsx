import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '..';
import Button from '../../button';
import HorizontalCard from '../../cards/HorizontalCard';
interface Props {
  open: boolean;
  setOpen(value?: any): void;
}

const UnsuccessfulSold: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <Modal
      open={open}
      setOpen={setOpen}
      title='Trade Unsuccessful'
      status='failed'
      subTitle='The Following item(s) have already sold, Please deselect these items or just press the button below '
    >
      <div className='modal-container'>
        <div className='content-container'>
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
        </div>
        <div className='button-group'>
          <Button
            logo={false}
            label='Remove Item and Restart Trade'
            variant='solid'
          />
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

export default UnsuccessfulSold;
