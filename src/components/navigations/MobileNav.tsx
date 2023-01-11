import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { i18nOptions, navItems } from '.';
import Dropdown from '../dropdown';
import './style.scss';

interface MobileNavProps {
  toggle: boolean;
  onClick: (e?: any) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ toggle, onClick }) => {
  const [selectedOption, setSelectedOption] = useState<{
    id: string;
    title: string;
    selected: boolean;
  }>({ id: '1', title: 'EN', selected: false });
  return (
    <div>
      <div className={`mobile ${toggle ? 'navigation' : ''}`} id='mobile'>
        <div className='menu-btn'>
          <div id='burgerBtn' onClick={onClick}></div>
          <Link to='/' className='logo'>
            <img src='assets/img/qc-logo.png' />
          </Link>
        </div>
        <ul id='nav'>
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
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
