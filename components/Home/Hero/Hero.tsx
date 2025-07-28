import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-[652px] bg-[url('/images/hero-bg.png')] bg-contain bg-no-repeat bg-center  flex flex-col justify-center">
      <div className='w-[90%] mx-auto items-center grid grid-cols-1 xl:grid-cols-1 gap-10'>
        {/* text content */}
        <div className='xl:max-w-[701px]'>
          <h1 className='text-[49px] font-normal text-[var(--black-500)] leading-[100%] font-manrope'>A Bridge of Trust, Guiding You Through Verified Paths</h1>
          <p className='text-xl leading-[30px] text-[#716F6E] font-normal font-manrope mt-5 mb-10'>We structure every transaction in compliance with legal requirements, connecting only verified listings  and trustworthy sellers. With expert guidance, 
            each step is managed transparently, allowing buyers to  gain clear legal assurance and trust. 
            More than just a connector, we serve as a bridge of trust—ensuring  both stability and legitimacy.
          </p>
          <button className="bg-[#E74C3C] text-white px-6 py-3 font-manrope text-base font-medium leading-[22px] border border-[#E74C3C] hover:border-[#2B2826] rounded-lg cursor-pointer hover:bg-transparent hover:text-[#2B2826] transition duration-300">
           Get a Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

