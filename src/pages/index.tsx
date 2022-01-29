import React from 'react';
import type { NextPage } from 'next';
import {
  CoreTeamSection, CryptoCards, Hero, SecondSection, TableSection,
} from '../components';

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <SecondSection />
      <CryptoCards />
      <CoreTeamSection />
      <TableSection />
    </div>
  );
};

export default Home;
