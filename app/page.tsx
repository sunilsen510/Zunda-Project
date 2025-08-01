import React from 'react';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import HomeSection from '@/components/Home/Home';

const HomePage: React.FC = () => {

  return (
    <>
      <Header />
      <HomeSection />
      <Footer />
    </>
  );
};

export default HomePage;