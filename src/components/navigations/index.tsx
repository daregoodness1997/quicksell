import React, { useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '../button';
import Dropdown from '../dropdown';

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

export const i18nOptions = [
  { id: '1', title: 'EN', selected: false },
  { id: '2', title: 'FR', selected: false },
  { id: '3', title: 'RU', selected: false },
  { id: '4', title: 'DE', selected: false },
];

let activeClassName = 'nav-item-active';

interface TopNavProps {
  onClick?: (event?: any) => void;
  toggle: boolean;
}

const TopNav: React.FC<TopNavProps> = ({ onClick, toggle }) => {
  const hamburgerRef = useRef();
  const [menu, setMenu] = useState(false);
  const [selectedOption, setSelectedOption] = useState<{
    id: string;
    title: string;
    selected: boolean;
  }>({ id: '1', title: 'EN', selected: false });

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
                className={({ isActive }) =>
                  isActive ? activeClassName : 'nav-item'
                }

                // to={item.link}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className='button-group'>
          {/* <div className='i18n-dropdown'>EN</div> */}
          <Dropdown
            list={i18nOptions}
            setSelectedOption={setSelectedOption}
            selectedOption={selectedOption}
          />
          <div className='bottom-wrapper'>
            <Button label='Sign in with Steam' />
          </div>
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
