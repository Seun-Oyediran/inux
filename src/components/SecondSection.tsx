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
      offset: 150,
      duration: 500,
      easing: 'ease-in-sine',
      delay: 50,
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
            <h3 className="my-2">Lorem ipsum dolor sit amet, consectetur adipiscing</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus nunc eget
              est ornare faucibus. Sed tristique mi in urna vulputate, id viverra nunc ullamcorper.
              Nam sit amet sodales augue. P hasellus sodales dignissim lectus eget condimentum.
              Mauris sollicitudin sit amet lacus ut feugiat. Curabitur a sagittis neque.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Vivamus faucibus nunc eget est ornare
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
            <div className="d-flex item my-4 " data-aos="zoom-in">
              <div className="icon-con">
                <img src="./img/second_section_icon_1.png" alt="icon1" />
              </div>
              <div className="item-text d-flex flex-column justify-content-between">
                <h4 className="mb-0">Lorem ipsum</h4>
                <p className="mb-0">
                  consectetur adipiscing elit. Ut in justo iaculis, molestie lectus id, posuere
                  tortor
                </p>
              </div>
            </div>

            <div className="d-flex item my-4" data-aos="zoom-in">
              <div className="icon-con">
                <img src="./img/second_section_icon_2.png" alt="icon1" />
              </div>
              <div className="item-text d-flex flex-column justify-content-between">
                <h4 className="mb-0">Lorem ipsum</h4>
                <p className="mb-0">
                  consectetur adipiscing elit. Ut in justo iaculis, molestie lectus id, posuere
                  tortor
                </p>
              </div>
            </div>

            <div className="d-flex item my-4" data-aos="zoom-in">
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
            </div>

            <div className="d-flex d-md-none justify-content-center  mt-3 mt-md-0">
              <div className="img-con" data-aos="fade-right">
                <Lottie options={miningOptions} />
                {/* <img src="./img/second_section_2.png" alt="second" /> */}
              </div>
            </div>
          </div>
        </div>

        <div className="big-btn-con py-5 d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-primary py-2 px-5 d-flex justify-content-center align-items-center bg-transparent"
          >
            <BigButtonIcon />
            About Lorem
          </button>
        </div>

        <div className="my-3 my-md-5 py-md-5">
          <div className="third-header">
            <h3>Lorem ipsum dolor</h3>
          </div>
          <div className="third d-md-flex justify-content-between">
            <div
              className="text-content d-flex justify-content-center align-items-center flex-column"
              data-aos="fade-right"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus nunc eget
                est ornare faucibus. Sed tristique mi in urna vulputate, id viverra nunc
                ullamcorper. Nam sit amet sodales augue. P hasellus sodales dignissim lectus eget
                condimentum. Mauris sollicitudin sit amet lacus ut feugiat. Curabitur a sagittis
                neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus nunc
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
