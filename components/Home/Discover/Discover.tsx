import React from 'react'

type User = {
  name: string;
  id: string;
  industry: string;
  region: string;
  headquarters: string;
  estimatedprice: string;
  verificationstatus: string;
};

const data: User[] = [
  {
    name: 'CryptoHive',
    id: '#CH-1345',
    industry: 'Fintech',
    region: 'EU',
    headquarters: 'Berlin',
    estimatedprice: '$1.2M',
    verificationstatus: 'Verified',
  },
  {
    name: 'FoodCloud ',
    id: '#FC-2221',
    industry: 'Food',
    region: 'EU',
    headquarters: 'Lisbon',
    estimatedprice: '$850K',
    verificationstatus: 'Unverified',
  },
  {
    name: 'GreenVolt',
    id: '#GV-8740',
    industry: 'Energy',
    region: 'EU',
    headquarters: 'Lisbon',
    estimatedprice: '$340K',
    verificationstatus: 'Verified',
  },
  {
    name: 'Medipoint',
    id: '#ML-3049',
    industry: 'HealthTech',
    region: 'EU',
    headquarters: 'Berlin',
    estimatedprice: '$3.2M',
    verificationstatus: 'Un Verified',
  },
  {
    name: 'SkillBridge',
    id: '#SB-1198',
    industry: 'EdTech',
    region: 'EU',
    headquarters: 'Berlin',
    estimatedprice: '$550k',
    verificationstatus: 'Verified',
  },
  {
    name: 'LegalNest',
    id: '#LN-7810',
    industry: 'Legal',
    region: 'EU',
    headquarters: 'Lisbon',
    estimatedprice: '$5.6M',
    verificationstatus: 'Un Verified',
  },
  {
    name: 'BitVault Casino',
    id: '#BV-6403',
    industry: 'Gaming',
    region: 'EU',
    headquarters: 'Berlin',
    estimatedprice: '$230K',
    verificationstatus: 'Verified',
  },
{
    name: 'ClickNova',
    id: '#CN-5581',
    industry: 'Media',
    region: 'EU',
    headquarters: 'Lisbon',
    estimatedprice: '$1.2M',
    verificationstatus: 'Un Verified',
  },


];

const Discover = () => {
  return (
    <>
      {/* <section className="w-full h-auto min-h-[650px] bg-no-repeat bg-cover bg-center relative overflow-hidden pb-[120px]">
        <div className="absolute inset-0 circle-clip bg-[#40BFC1] z-0"></div>
        <div className=" relative z-10 flex flex-col items-center h-[400px] text-white text-center pt-[88px]">
          <h2 className=" max-w-[1392px] mx-auto text-[39px] font-manrope font-bold ">
            Discover Legally Verified Opportunities Tailored to You. <br />
            Explore Live Listings with Safety and Confidence.
          </h2>
        </div>

        <div className="relative z-20 w-full mt-[-100px]">
          <div className="w-[1392px] h-[684px] overflow-auto mx-auto bg-white shadow-xl rounded-4xl">
            <ul className="grid grid-cols-7 bg-[#40BFC1] shadow-xl text-center text-white font-bold py-4 px-6 rounded-4xl mb-4">
              <li>Company Name</li>
              <li>Listing ID</li>
              <li>Industry</li>
              <li>Region</li>
              <li>Headquarters</li>
              <li>Estimated Price</li>
              <li>Verification Status</li>
            </ul>

            {data.map((user: User, index: number) => (
              <ul
                key={index}
               className="grid grid-cols-7 w-[90%] mx-auto border-b border-[#CBD5E1] text-[#555351] py-3 px-6 mb-2 text-center transition-all duration-300"
              >
                <li>{user.name}</li>
                <li>{user.id}</li>
                <li>{user.industry}</li>
                <li>{user.region}</li>
                <li>{user.headquarters}</li>
                <li>{user.estimatedprice}</li>
                <li>
                  {user.verificationstatus.toLowerCase() === 'verified' ? (
                    <span className="inline-block px-4 py-1 text-sm font-semibold text-[#059669] bg-[#D1FAE5] border border-[#D1FAE5] rounded-full">
                      Verified
                    </span>
                  ) : (
                    <span className="inline-block px-4 py-1 text-sm font-semibold text-[#C93B3B] bg-[#FEE2E2] border border-[#FEE2E2] rounded-full">
                      Unverified
                    </span>
                  )}
                </li>
              </ul>
            ))}
          </div>
        </div>
      </section> */}
      <section>
        
      </section>
    </>
  )
}

export default Discover
