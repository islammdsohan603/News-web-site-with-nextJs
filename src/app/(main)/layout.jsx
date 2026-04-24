import BreakingNews from '@/components/shared/BreakingNews';
import HeaderPage from '@/components/shared/Header';
import NavbarPage from '@/components/shared/Navbar';
import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div>
      <HeaderPage />
      <BreakingNews />
      <NavbarPage />
      {children}
    </div>
  );
};

export default MainLayout;
