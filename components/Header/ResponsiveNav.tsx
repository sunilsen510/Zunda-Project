"use client";
import React, { useState } from 'react';
import Header from './Header';
import MobileNav from './MobileNav';

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  const openNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);
  return (
    <div>
      <Header openNav = {openNavHandler} />
      <MobileNav showNav = {showNav} closeNav={closeNavHandler} />
    </div>
  )
}

export default ResponsiveNav;
