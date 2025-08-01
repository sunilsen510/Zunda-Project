import React from 'react'
import Hero from './Hero/Hero'
import Platform from './Platform/Platform'; 
import Discover from './Discover/Discover';
import Enterprise from './Enterprise/Enterprise';
import Faq from './Faq/Faq';
import Request from './Request/Request';

const Home = () => {
  return (
    <>
      <Hero
        title="A Bridge of Trust, Guiding You Through Verified Paths"
        description="We structure every transaction in compliance with legal requirements, connecting only verified listings and trustworthy sellers. With expert guidance, each step is managed transparently, allowing buyers to gain clear legal assurance and trust. More than just a connector, we serve as a bridge of trust—ensuring both stability and legitimacy."
        buttonText="Get a Free Consultation"
        backgroundImage="/images/hero-bg.png"
      />
      <Platform />
      <Discover />
      <Enterprise />
      <Faq />
      <Request />
    </>
  )
}

export default Home
