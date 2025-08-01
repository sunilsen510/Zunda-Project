import React from 'react';

const cardsData = [
  {
    img: '/images/img-1.png',
    title: 'Strategic Advisory',
    desc: 'We provide strategic guidance tailored to your acquisition intent..',
  },
  {
    img: '/images/img-2.png',
    title: 'Negotiation Support',
    desc: 'Our experts support you from negotiation to final contract.',
  },
  {
    img: '/images/img-3.png',
    title: 'Deal Matching',
    desc: 'We mediate the entire M&A process to ensure secure transactions.',
  },
  {
    img: '/images/img-4.png',
    title: 'M&A Mediation',
    desc: 'We mediate the entire M&A process to ensure secure transactions.',
  },
  {
    img: '/images/img-5.png',
    title: 'Post-Deal Assistance',
    desc: 'We offer continuous post-deal support and legal consultation.',
  },
];

const Platform = () => {
  return (
    <section className="w-[1392px] mx-auto h-screen py-[120px]">
      <div className="w-full grid grid-cols-[448px_1fr] gap-6 h-full">
        <div className="h-fit sticky top-10 self-start">
          <h2 className="text-[39px] font-bold text-[var(--black-500)] leading-[100%] font-manrope">
            Experience the Full Platform for Free
          </h2>
          <p className="text-xl leading-[30px] text-[#716F6E] font-normal font-manrope mt-5 mb-10">
            We simplify the complex and costly M&A process—reducing expenses while expanding your opportunities.
          </p>
          <button className="bg-[#E74C3C] text-white px-6 py-3 font-manrope text-base font-medium leading-[22px] border border-[#E74C3C] hover:border-[#2B2826] rounded-lg cursor-pointer hover:bg-transparent hover:text-[#2B2826] transition duration-300">
            Start Now
          </button>
        </div>

        <div className="overflow-y-auto pr-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-full">
            <div className="flex flex-col justify-center  items-center gap-6">
              {cardsData.slice(0, 2).map((card, index) => (
                <div
                  key={index}
                  className="w-full bg-white rounded-lg flex flex-col text-lg font-semibold text-gray-700"
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-[344px] object-cover object-center  rounded-2xl mb-6"
                  />
                  <h3 className="text-[24px] font-bold text-gray-900 leading-tight font-manrope">
                    {card.title}
                  </h3>
                  <p className="text-base text-[#716F6E] font-normal font-manrope mt-2">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-6">
              {cardsData.slice(2).map((card, index) => (
                <div
                  key={index}
                  className="w-full bg-white rounded-lg flex flex-col text-lg font-semibold text-gray-700"
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-[344px] object-cover object-center rounded-2xl mb-6"
                  />
                  <h3 className="text-[24px] font-bold text-gray-900 leading-tight font-manrope">
                    {card.title}
                  </h3>
                  <p className="text-base text-[#716F6E] font-normal font-manrope mt-2">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;

