import React from 'react';
import { Link } from 'react-router-dom';

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
  { name: 'Marketplace', link: '/' },
  { name: 'Reserving', link: '/' },
  { name: 'Brokering', link: '/' },
];

const TopNav = () => {
  return (
    <div className='top-navigation'>
      <div className='left-navigation'>
        <img src='assets/img/qc-logo.png' />
        <nav>
          {/* {navItems.map(item => (
            <Link to={item.link}>{item.name}</Link>
          ))} */}
        </nav>
      </div>
      <div>CTA</div>
    </div>
  );
};

export default TopNav;
