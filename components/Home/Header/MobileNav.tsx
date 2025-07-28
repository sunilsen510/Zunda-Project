import { navLinks } from '@/constants/constant'
import Link from 'next/link';
import React from 'react';

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({closeNav,showNav}:Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    // overlay
    <div className={`fixed ${navOpen} inset-0 transform transition-all drop-shadow-fuchsia-500 z-[1002] bg-black opacity-70 w-full h-screen`}>
      {/* navlinks */}
      <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[30%] bg-[#E74C3C] space-y-6 z-[1050]`}>
       {navLinks.map((link) => {
        return (
        <Link key={link.id} href={link.url}>
          <p className='text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[18px]'>
            {link.label}
          </p>
        </Link>
        )
       })}
       {/* close icon */}
        <button onClick={closeNav} className="w-6 h-6 absolute top-[10px] right-[10px] text-white cursor-pointer" aria-label="Close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default MobileNav
