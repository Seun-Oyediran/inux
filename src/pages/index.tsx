import React, { Fragment } from 'react';
import type { NextPage } from 'next';
import { motion } from 'framer-motion';
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
      {/* <motion.div className="inux-loader-position-fixed">
        <div>
          <img src="./img/logo.png" alt="logo" />
        </div>
        <div className="lds-circle">
          <div />
        </div>
      </motion.div> */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Hero />
        <SecondSection />
        <CryptoCards />
        <CoreTeamSection />
        <TableSection />
        <RoadMap />
        <FAQs />
        <Footer />
      </motion.div>
    </Fragment>
  );
};

export default Home;
