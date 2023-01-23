import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '..';
import AppButton from '../../button/AppButton';
interface Props {
  open: boolean;
  setOpen(value?: any): void;
}

const Successful: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <Modal
      open={open}
      setOpen={setOpen}
      title='Trade has been created'
      status='complete'
      subTitle='We have confirmed  and sent you trade offer, please click the button below to accept'
    >
      <div className='modal-container'>
        <img src='assets/gif/correct.gif' />
        <div style={{ textAlign: 'left', marginBottom: '1rem' }}>
          <small>
            You account may have been hijacked. Don’t confirm any trade and
            click here
          </small>
        </div>

        <div
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <AppButton logo={false} label='GOTO TRADE' variant='solid' />
        </div>

        <div className='modal-footer'>
          <div className='flex'>
            <img src='assets/svg/warning-icon.svg' />

            <h4>Didn’t decline this trade</h4>
          </div>
          <small>
            You account may have been hijacked. Don’t confirm any trade and{' '}
            <Link to='support'>Click here</Link>
          </small>
        </div>
      </div>
    </Modal>
  );
};

export default Successful;
