import React from 'react';
import { Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Play } from '../svgs';
import { headerRoutes } from '../Utils';
import HeroImg from './HeroImg';

const Hero = () => {
  // const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div className="inux-hero-con ">
      {/* <motion.div animate={{ top: pos.y, left: pos.x }} className="mouse-follow" /> */}
      <div className="d-flex justify-content-between align-items-center py-3 app-container">
        <div className="logo-con">
          <img src="./img/logo.png" alt="logo" />
        </div>
        <div>
          <div className="d-flex routes-flex">
            {headerRoutes.map((item, index) => (
              <Button variant="link" key={index} href={item.route}>
                {item.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div
        className="content d-flex justify-content-between w-100  pt-4"
        // onMouseMove={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        //   setPos({
        //     x: event.nativeEvent.pageX - 15,
        //     y: event.nativeEvent.pageY - 15,
        //   });
        // }}
      >
        <div className="mt-5 pt-3 px-5">
          <div className="text-content">
            <div className="my-4 d-flex align-items-center top-text-con ">
              <div className="img-con d-flex align-items-center">
                <img src="./img/landing_text_icon.png" alt="icon" />
              </div>
              <p className="mb-0"> Lorem ipsum dolor sit </p>
            </div>

            <div className="mt-5">
              <h2 className="mb-0">
                Make your
                {' '}
                <span>Crypto</span>
                {' '}
                <br />
                {' '}
                Transaction
              </h2>

              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in justo iaculis,
                molestie lectus id, posuere tortor. Pellentesque nisi nisl, auctor
              </h4>

              <div className="btn-con d-flex pt-5 mt-3 align-items-center">
                <div className="btn-icon-con">
                  <img src="./img/arrow.png" alt="icon" />
                </div>
                <motion.button
                  whileHover={{ translateY: '-5px' }}
                  type="button"
                  className="d-flex align-items-center btn btn-primary"
                >
                  <Play />
                  How it works
                </motion.button>

                <motion.button
                  whileHover={{ translateY: '-5px' }}
                  type="button"
                  className="d-flex align-items-center btn btn-outline-primary"
                >
                  <Play />
                  Lorem Ipsum
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-img d-flex justify-content-end">
          <HeroImg />
        </div>
      </div>
    </div>
  );
};

export default Hero;
