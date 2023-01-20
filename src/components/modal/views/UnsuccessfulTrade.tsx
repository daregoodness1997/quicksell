import React from 'react';
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
        <div className='button-group'>
          <Button logo={false} label='Add Icon(s)' variant='solid' />
        </div>
      </div>{' '}
    </Modal>
  );
};

export default UnsuccessfulTrade;
