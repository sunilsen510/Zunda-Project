// import React from 'react'

// const platform = () => {
//   return (

//     {/* cards */}
//     <div>
//       <div className="flex w-[90%] mx-auto items-center">
//         <div className="w-[448px] h-[304px]">
//           <h2 className='text-[39px] font-bold text-[var(--black-500)] leading-[100%] font-manrope'>Experience the Full Platform for Free</h2>
//             <p className='text-xl leading-[30px] text-[#716F6E] font-normal font-manrope mt-5 mb-10'>
//               We simplify the complex and costly M&A process—reducing expenses while expanding your  opportunities.
//             </p>
//             <button className="bg-[#E74C3C] text-white px-6 py-3 font-manrope text-base font-medium leading-[22px] border border-[#E74C3C] hover:border-[#2B2826] rounded-lg cursor-pointer hover:bg-transparent hover:text-[#2B2826] transition duration-300">
//               Start Now
//             </button>
//         </div>
//         <div className="w-[448px] h-[304px]">Box 2</div>
//         <div className="w-[448px] h-[304px]">Box 3</div>
//       </div>
//     </div>
//   )
// }

// export default platform


import React from 'react';

const Platform = () => {
  return (
    <div>
      {/* cards */}
      <div className="flex w-[90%] mx-auto items-center justify-center gap-6">
        {/* Card 1 */}
        <div className="w-[448px] h-[304px]">
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

        {/* Card 2 */}
        <div className="w-[448px] h-[304px] bg-gray-100 rounded-lg flex items-center justify-center text-lg font-semibold text-gray-700">
          Box 2
        </div>

        {/* Card 3 */}
        <div className="w-[448px] h-[304px] bg-gray-100 rounded-lg flex items-center justify-center text-lg font-semibold text-gray-700">
          Box 3
        </div>
      </div>
    </div>
  );
};

export default Platform;
