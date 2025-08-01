import React from 'react';
import Link from 'next/link';


const footerData = [
  {
    title: 'For Buyers',
    links: ['Explore Listings', 'How to Buy', 'Case Studies', 'Apply for Matchmaking'],
  },
  {
    title: 'For Sellers',
    links: ['How to Sell', 'Case Studies', 'Submit Your Business'],
  },
  {
    title: 'Advisory Services',
    links: ['About Our Advisors', 'Scope of Services', 'Due Diligence & Legal Support', 'Strategic Advisory Request'],
  },
  {
    title: 'Resources',
    links: ['News & Insights', 'Market Trends', 'Due Diligence Checklist', 'Glossary'],
  },
  {
    title: 'About Us',
    links: ['Our Team', 'Careers', 'Code of Ethics', 'Terms of Service', 'Privacy Policy'],
  },
  {
    title: 'Support',
    links: ['Partnership Request', 'Contact Us', 'support@zundabridge.com'],
  },
];

const Footer = () => {
  return (
    <section className="bg-black text-white py-12">
    <div className="w-[1392px] mx-auto px-4 grid grid-cols-1 md:grid-cols-[30%_70%] gap-6">
      
      {/* Left: Logo + Info + Social */}
      <div className='w-[271px] h-full'>
        {/* Logo */}
        <div className="mb-4">
          <Link href="/">
            <img  
              src="/images/logo-white.svg"
              alt="Logo"
              className=""
            />
          </Link>
        </div>

        {/* Registration Number */}
        <p className="text-sm font-medium mb-2">Reg. No: 834-34-82736</p>

        {/* Description */}
        <p className="text-gray-500 text-sm mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis nunc vel metus bibendum, eu gravida nunc.
        </p>

        {/* Social Icons */}
        <ul className="flex space-x-4">
          <li>
            <a href="#" aria-label="Facebook">
              <img src="/images/social-icon.svg" alt="Social" className="w-6 h-6" />
            </a>
          </li>
          {/* Add more social icons as needed */}
        </ul>
      </div>

      {/* Right: Footer Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {footerData.map((section) => (
          <div key={section.title}>
            <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {section.links.map((link) => (
                <li key={link} className="hover:text-white cursor-pointer transition">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </div>
   </section>
  )}
export default Footer;
