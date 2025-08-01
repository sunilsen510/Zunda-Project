import React from 'react'
type CardData = {
  id: number;
  title: string;
  description: string;
  icon: string; 
};

const cards: CardData[] = [
  {
    id: 1,
    title: "Sensitive Information Protection",
    description: "Personal details such as name, contact, and company information  are never disclosed to unauthorized users",
    icon: "/icon/protection.svg",
  },
  {
    id: 2,
    title: "Access Control & NDA Policy",
    description: "Only users with a signed NDA can access sensitive materials. All  content is internally reviewed and access-controlled",
    icon: "/icon/policy.svg",
  },
  {
    id: 3,
    title: "Encrypted Data Transmission",
    description: "All data is transmitted securely using TLS/SSL encryption protocols  to protect against external threats",
    icon: "/icon/datalock.svg",
  },
  {
    id: 4,
    title: "Automated Suspicious Behavior Detection",
    description: "All user activities are monitored in real time. Any  abnormal access or actions are automatically detected and blocked to ensure security",
    icon: "/icon/search.svg",
  },
];
const Enterprise = () => {
  return (
   <section
        className="py-[80px] relative w-full h-[859px] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('/images/bg-one.png')" }}>
        <div className="max-w-[1392px] mx-auto text-black text-center">
          <h2 className=" text-[39px] font-manrope font-bold ">Your Information is Protected with Enterprise-Grade Security</h2>
          <p className='text-black'> All sensitive data is encrypted, and access is granted only after identity verification and NDA  agreement</p>
        </div>
        <div className="py-[64px]">
            <div className="max-w-[1440px] mx-auto flex flex-wrap justify-center gap-6">
                {cards.map((card) => (
                <div
                    key={card.id}
                    className="w-[684px] h-[204px] bg-white shadow-md rounded-2xl p-8 flex items-center gap-6 hover:shadow-lg transition"
                >
                    <div>
                    <h3 className="text-xl text-[#E74C3C] font-semibold mb-2">{card.title}</h3>
                    <p className="text-gray-600 text-sm">{card.description}</p>
                    </div>
                    <div
                        className="relative w-[94px] h-[94px] aspect-[1.1547] bg-[#E74C3C] flex items-center justify-center text-white shadow-md"
                            style={{
                                clipPath: 'polygon(-50% 50%, 50% 100%, 150% 50%, 50% 0)',
                                borderRadius: '20px'
                            }}
                    >
                    <img
                        src={card.icon}
                        alt={card.title}
                        className="w-10 h-10 object-contain"
                    />
                    </div>
                </div>
                ))}
            </div>
            <div className='text-center mt-[64px]'>
                <button className="bg-[#E74C3C] text-white px-6 py-3 font-manrope text-base font-medium leading-[22px] border border-[#E74C3C] hover:border-[#2B2826] rounded-lg cursor-pointer hover:bg-transparent hover:text-[#2B2826] transition duration-300">
                    Start Now
                </button>
            </div>
        </div>
    </section>
  )
}

export default Enterprise;
