import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from '../navigations';

interface Props {
  children?: React.ReactNode | undefined;
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <TopNav />
      {children}
      <Outlet />
    </div>
  );
};

export default Layout;
