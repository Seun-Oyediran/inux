import React from 'react';
import type { NextPage } from 'next';
import {
  CoreTeamSection,
  CryptoCards,
  FAQs,
  Footer,
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
      <Footer />
    </div>
  );
};

export default Home;
