import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '../button';

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'Trade', link: '/trade' },
  { name: 'Keys', link: '/keys' },
  { name: 'Giveaways', link: '/giveaways' },
  { name: 'Raffles', link: '/raffles' },
  { name: 'Auctions', link: '/auctions' },
  { name: 'Premium', link: '/premium' },
  { name: 'Donation', link: '/donations' },
  { name: 'About', link: '/about' },
  { name: 'Support', link: '/support' },
  { name: 'Marketplace', link: '/marketplace' },
  // { name: 'Reserving', link: '/' },
  // { name: 'Brokering', link: '/' },
];

const TopNav = () => {
  return (
    <div className='top-navigation'>
      <div className='left-navigation'>
        <Link to='/'>
          <img src='assets/img/qc-logo.png' />
        </Link>
        <nav>
          {navItems.map(item => (
            <NavLink
              to={item.link}
              className='nav-item'
              // to={item.link}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className='button-group'>
        <div>EN</div>
        <Button label='Sign in with Steam' />
      </div>
    </div>
  );
};

export default TopNav;
