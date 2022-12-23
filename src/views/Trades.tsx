import React from 'react';
import { Link } from 'react-router-dom';

const Trades = () => {
  return (
    <>
      {/* Trade Section */}
      <div className='container trades'>
        <div className='trade-header'>
          <h2>Trade, buy or sell In-Game Items</h2>
          <p>
            We allow you to safely buy, sell and trade in-game items for the
            lowest trading fees on the market.
          </p>
        </div>

        <div className='content flex '>
          <div className='box-3'>
            <h4>How to Trade</h4>
            <ul>
              <li>Login using your stream account and set your account link</li>
              <li>Go to Trade page to select the items you want to upgrade.</li>
              <li>
                Select the items you want to receive and click {'  '}
                <Link to='/trade'>Trade</Link>
              </li>
              <li>Get your items immediately!</li>
            </ul>
          </div>
          <div className='box-3'>
            <h4>How to Buy Keys</h4>
            <ul>
              <li>Login using your stream account and set your account link</li>
              <li>Go to Keys page to select the items you want to buy.</li>
              <li>
                Select the key you want to receive and click{'  '}
                <Link to='/keys'>Buy Keys</Link>
              </li>
              <li>Get your keys immediately!</li>
            </ul>
          </div>

          <div className='box-3'>
            <h4>How to Sell Keys</h4>
            <ul>
              <li>Login using your stream account and set your account link</li>
              <li>Go to Keys page to select the items you want to buy.</li>
              <li>
                Select the key you want to receive and click{'  '}
                <Link to='/keys'>Sell Keys</Link>
              </li>
              <li>Sell your keys immediately!</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trades;
