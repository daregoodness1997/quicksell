import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button';

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'Trade', link: '/' },
  { name: 'Keys', link: '/' },
  { name: 'Giveaways', link: '/' },
  { name: 'Raffles', link: '/' },
  { name: 'Auctions', link: '/' },
  { name: 'Premium', link: '/' },
  { name: 'Donation', link: '/' },
  { name: 'About', link: '/' },
  { name: 'Support', link: '/' },
  // { name: 'Marketplace', link: '/' },
  // { name: 'Reserving', link: '/' },
  // { name: 'Brokering', link: '/' },
];

const TopNav = () => {
  return (
    <div className='top-navigation'>
      <div className='left-navigation'>
        <img src='assets/img/qc-logo.png' />
        <nav>
          {navItems.map(item => (
            <a
              href={item.link}
              className='nav-item'
              // to={item.link}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
      <div className='button-group'>
        <div>EN</div>
        <Button />
      </div>
    </div>
  );
};

export default TopNav;
