"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {navLinks}  from '@/constants/constant';
import { Menu } from "lucide-react";

type Props = {
  openNav: () => void;
}

const Header = ({openNav}:Props) => {
  console.log('navLinks:', navLinks);

  const [navBg, setNavbg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if(window.scrollY >=90) setNavbg(true);
      if(window.scrollY < 90) setNavbg(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <section className={`transition-all ${navBg? 'bg-white shadow-md' : 'fixed'} duration-200 z-[100] fixed w-full bg-white`}>
      <div className="w-full px-4 py-6 max-w-[1392px] mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* Logo */}
            <div className="w-[92px] h-[48px] flex items-center justify-center">
              <Link href="/">
                <img
                  src="/images/Logo.svg"
                  alt="Logo"
                  className="h-12 lg:w-[192px] lg:h-[48px] md:h-12"
                />
              </Link>
            </div>
          </div>
          <div className='flex items-center space-x-10'>
          {/* Navlinks */}
          <div className='hidden lg:flex items-center space-x-10'>
              {navLinks.map((link) => (
                <Link
                  href={link.url}
                  key={link.id}
                  className='text-[var(--black-500)] hover:text-[#E74C3C] text-base font-manrope leading-[22px] font-normal transition-all duration-200'
                >
                  <p>{link.label}</p>
                </Link>
              ))}
          </div>
          {/* Buttons */}
          <div className="flex items-center">
            <button className="bg-[#E74C3C] text-white px-6 py-3 font-manrope text-base font-medium leading-[22px] border border-[#E74C3C] hover:border-[#2B2826] rounded-lg cursor-pointer hover:bg-transparent hover:text-[#2B2826] transition duration-300">
              Start M&A
            </button>
            {/* Burger Menu Icon */}
            <button className="lg:hidden block">
              <Menu onClick={openNav} className="w-6 h-6 text-[#2B2826]" />
            </button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
