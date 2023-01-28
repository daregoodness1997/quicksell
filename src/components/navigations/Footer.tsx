import React from 'react';
import { Link } from 'react-router-dom';
import { DiscordIcon, SteamGreyIcon } from '../icons';

const footerNavigation = [
  {
    title: 'Overview',
    links: ['Trade', 'Giveaway', 'Keys', 'Raffles'],
  },
  {
    title: 'Additionals',
    links: ['Auctions', 'Raffles', 'Premium', 'Donations'],
  },
  {
    title: 'Socials',
    links: ['Discord', 'Steam'],
  },
];

const Footer = () => {
  return (
    <div>
      <div className='container footer flex'>
        <div className='left-navigation'>
          <Link to='/'>
            <img src='assets/img/qc-logo.png' />
          </Link>
          <p>
            © 2019-2022 Quicksell.store - Powered by Steam - Particles from
            backpack.tf
          </p>
        </div>

        <div className='right-navigation'>
          <div className='navigation'>
            {footerNavigation.map(({ title, links }, idx) => (
              <div className='list' key={idx}>
                <h5>{title}</h5>
                <ul>
                  {links.map((link, idx) => (
                    <Link to={link} key={idx}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='container flex'>
        <p>© 2022 QuickStore. All rights reserved.</p>
        <div className='flex gap-2'>
          <DiscordIcon />
          <SteamGreyIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
