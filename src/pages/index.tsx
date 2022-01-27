import React from 'react';
import type { NextPage } from 'next';
import { CryptoCards, Hero, SecondSection } from '../components';

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <SecondSection />
      <CryptoCards />
    </div>
  );
};

export default Home;
