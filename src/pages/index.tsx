import React, { Fragment } from 'react';
import type { NextPage } from 'next';
// import Lottie from 'react-lottie';
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
  WhyInux,
} from '../components';
import { metaData } from '../Utils';
// import LoadingData from '../lottie/wait.json';

const Home: NextPage = () => {
  return (
    <Fragment>
      <Header data={metaData} />
      {/* <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, delay: 5 }}
        className="inux-loader-position-fixed"
      >
        <Lottie options={loadingData} />
      </motion.div> */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.1 }}>
        <Hero />
        <SecondSection />
        <WhyInux />
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
