import React, { Fragment } from 'react';
import type { NextPage } from 'next';
import {
  CoreTeamSection,
  CryptoCards,
  FAQs,
  Footer,
  Header,
  Hero,
  RoadMap,
  SecondSection,
  TableSection,
} from '../components';
import { metaData } from '../Utils';

const Home: NextPage = () => {
  return (
    <Fragment>
      <Header data={metaData} />
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
    </Fragment>
  );
};

export default Home;
