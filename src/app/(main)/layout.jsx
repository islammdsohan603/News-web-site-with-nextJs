import HeaderPage from '@/components/shared/Header'
import NavbarPage from '@/components/shared/Navbar'
import React from 'react'

const MainLayout = ({ children }) => {
  return (
    <div>
      <HeaderPage />
      <NavbarPage />
      {children}
    </div>
  )
}

export default MainLayout
