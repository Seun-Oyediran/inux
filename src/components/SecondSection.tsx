import React, { useEffect } from 'react';
import Lottie from 'react-lottie';
import AOS from 'aos';
import { BigButtonIcon } from '../svgs';
import miningData from '../lottie/mining.json';
import cryptoData from '../lottie/crypto.json';
import bitcoinData from '../lottie/bitcoin.json';

const miningOptions = {
  loop: true,
  autoplay: true,
  animationData: miningData,
};

const cryptOptions = {
  loop: true,
  autoplay: true,
  animationData: cryptoData,
};

const bitcoinOptions = {
  loop: true,
  autoplay: true,
  animationData: bitcoinData,
};

const SecondSection = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      // easing: 'linear',
      delay: 50,
      // anchorPlacement: 'bottom-bottom',
    });
    // AOS.refresh();
  }, []);

  return (
    <div className="app-container">
      <div className="inux-second-section-container ">
        <div className="first d-md-flex justify-content-between py-3 py-md-5  ">
          <div
            className="text-content d-flex justify-content-center align-items-center flex-column "
            data-aos="fade-right"
          >
            <h3 className="my-2 mb-4">Our Ecosystem</h3>
            <p>
              The INUX Ecosystem intends to create a suite of Decentralized Finance(DeFi) products:
              an IDO Launchpad and a Decentralized Exchange.
            </p>
          </div>
          <div className="d-flex justify-content-center mt-3 mt-md-0">
            <div className="img-con" data-aos="fade-up">
              <Lottie options={cryptOptions} />
              {/* <img src="./img/second_section_1.png" alt="second" /> */}
            </div>
          </div>
        </div>

        <div className="second d-md-flex justify-content-between my-0 my-md-5 py-md-5">
          <div className="d-none d-md-flex justify-content-center">
            <div className="img-con" data-aos="fade-right">
              <Lottie options={miningOptions} />
              {/* <img src="./img/second_section_2.png" alt="second" /> */}
            </div>
          </div>

          <div className="text-content d-flex justify-content-center align-items-center flex-column ">
            <div className="d-lg-flex item my-4 " data-aos="zoom-in">
              <div className="d-flex justify-content-center">
                <div className="icon-con ">
                  <img src="./img/second_section_icon_1.png" alt="icon1" />
                </div>
              </div>
              <div className="item-text d-flex flex-column justify-content-between">
                <h4 className="mb-0">IDO launchpad</h4>
                <p className="mb-0">
                  The IDO Launchpad is a core part of the INUX ecosystem.
                  {' '}
                  {'Inux"s '}
                  IDO launchpad allows crypto projects to sell tokens for future DeFi Crypto
                  launches. The purpose of INUX is to create a fully decentralized IDO launchpad
                  where everyone can inves
                </p>
              </div>
            </div>

            <div className="d-lg-flex item my-4" data-aos="zoom-in">
              <div className="d-flex justify-content-center">
                <div className="icon-con">
                  <img src="./img/second_section_icon_2.png" alt="icon1" />
                </div>
              </div>
              <div className="item-text d-flex flex-column justify-content-between">
                <h4 className="mb-0">DEX (Decentralized Exchange)</h4>
                <p className="mb-0">
                  Inux intends to build Inux DEX, a decentralized exchange built on the Solana
                  blockchain, to enable faster and affordable transactions. Due to their poor
                  speeds, limited scalability, and high transaction fees, most users have trouble
                  trading on token exchanges built on the Ethereum network.
                </p>
              </div>
            </div>

            {/* <div className="d-flex item my-4" data-aos="zoom-in">
              <div className="icon-con">
                <img src="./img/second_section_icon_3.png" alt="icon1" />
              </div>
              <div className="item-text d-flex flex-column justify-content-between">
                <h4 className="mb-0">Lorem ipsum</h4>
                <p className="mb-0">
                  consectetur adipiscing elit. Ut in justo iaculis, molestie lectus id, posuere
                  tortor
                </p>
              </div>
            </div> */}

            <div className="d-flex d-md-none justify-content-center  mt-3 mt-md-0">
              <div className="img-con" data-aos="fade-right">
                <Lottie options={miningOptions} />
                {/* <img src="./img/second_section_2.png" alt="second" /> */}
              </div>
            </div>
          </div>
        </div>
        <div id="about" className="py-5" />
        <div className="big-btn-con d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-primary py-2 px-5 d-flex justify-content-center align-items-center bg-transparent"
          >
            <BigButtonIcon />
            About Us
          </button>
        </div>

        <div className="my-3 my-md-5 py-md-5">
          {/* <div className="third-header">
            <h3>About Us</h3>
          </div> */}
          <div className="third d-md-flex justify-content-between">
            <div
              className="text-content d-flex justify-content-center align-items-center flex-column"
              data-aos="fade-right"
            >
              <p>
                <strong> Our Vision</strong>
                : Creation of highly efficient, secure and scalable
                Next-generation DeFi products on the Solana network.
              </p>
              <p>
                <strong> Our Mission</strong>
                : To attract and Onboard the next 10million DeFi
                investors by leveraging on the solana network to provide fast, affordable and
                scalable DeFi products.
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <div className="img-con" data-aos="fade-left">
                <Lottie options={bitcoinOptions} />
                {/* <img src="./img/second_section_1.png" alt="second" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
