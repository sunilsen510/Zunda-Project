import React from 'react';

type HeroProps = {
  title: string;
  description: string;
  buttonText: string;
  backgroundImage: string;
};

const Hero: React.FC<HeroProps> = ({ title, description, buttonText, backgroundImage }) => {
  return (
    <section
      className="w-full h-[652px] bg-no-repeat bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-[1392px] mx-auto  ">
        <div className="xl:max-w-[701px] xl:max-h-[392px]">
          <h1 className="text-[49px] font-normal text-[var(--black-500)] leading-[100%] font-manrope">
            {title}
          </h1>
          <p className="text-xl leading-[30px] text-[#716F6E] font-normal font-manrope mt-5 mb-10">
            {description}
          </p>
          <button className="bg-[#E74C3C] text-white px-6 py-3 font-manrope text-base font-medium leading-[22px] border border-[#E74C3C] hover:border-[#2B2826] rounded-lg cursor-pointer hover:bg-transparent hover:text-[#2B2826] transition duration-300">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
