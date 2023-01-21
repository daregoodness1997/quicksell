import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '..';
import Button from '../../button';
interface Props {
  open: boolean;
  setOpen(value?: any): void;
}

const UnsuccessfulTrade: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <Modal
      open={open}
      setOpen={setOpen}
      title='Trade Unsuccessful'
      status='failed'
      subTitle='Please Select some items first'
    >
      <div className='modal-container'>
        <img src='assets/gif/empty-box.gif' />

        <div className='modal-footer'>
          <div className='flex'>
            <img src='assets/svg/warning-icon.svg' />

            <h4>Didn’t decline this trade</h4>
          </div>
          <small>
            You account may have been hijacked. Don’t confirm any trade and
            <Link to='support'>Click here</Link>
          </small>
        </div>
      </div>{' '}
    </Modal>
  );
};

export default UnsuccessfulTrade;
