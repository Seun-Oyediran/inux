import React from 'react';
import type { NextPage } from 'next';
import {
  CoreTeamSection,
  CryptoCards,
  FAQs,
  Hero,
  RoadMap,
  SecondSection,
  TableSection,
} from '../components';

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <SecondSection />
      <CryptoCards />
      <CoreTeamSection />
      <TableSection />
      <RoadMap />
      <FAQs />
    </div>
  );
};

export default Home;
