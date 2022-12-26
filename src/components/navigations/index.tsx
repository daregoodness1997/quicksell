import React, { useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '../button';

export const navItems = [
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

interface TopNavProps {
  onClick?: (event?: any) => void;
  toggle: boolean;
}

const TopNav: React.FC<TopNavProps> = ({ onClick, toggle }) => {
  const hamburgerRef = useRef();
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className='top-navigation'>
        <div className={`left-navigation ${toggle ? 'navigation' : ''}`}>
          <button className='menu-btn'>
            <div id='burgerBtn' onClick={onClick}></div>
          </button>

          <Link to='/'>
            <img src='assets/img/qc-logo.png' className='logo' />
          </Link>
          <nav>
            {navItems.map((item, idx) => (
              <NavLink
                key={idx}
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
          <div className='i18n-dropdown'>EN</div>
          <Button label='Sign in with Steam' />
        </div>
      </div>
      <div className={`nav-ul ${toggle ? 'navigation' : ''}`}>
        {navItems.map((item, idx) => (
          <NavLink
            to={item.link}
            key={idx}
            className='nav-item'
            onClick={onClick}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default TopNav;
