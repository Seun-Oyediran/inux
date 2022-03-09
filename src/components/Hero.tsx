import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { AnimatePresence, motion } from 'framer-motion';
// import Typewriter from 'typewriter-effect';
import { useRouter } from 'next/router';
import { Play } from '../svgs';
import { headerRoutes } from '../Utils';
import HeroImg from './HeroImg';
import Counter from './Counter';

const Hero = () => {
  // const [pos, setPos] = useState({ x: 0, y: 0 });
  const router = useRouter();
  const [navOpen, setOpenNav] = useState(false);

  return (
    <div className="inux-hero-con " id="home">
      {/* <motion.div animate={{ top: pos.y, left: pos.x }} className="mouse-follow" /> */}
      <div className="py-3 app-container app-header-fixed">
        <div className="d-flex justify-content-between align-items-center ">
          <div className="logo-con">
            <img src="./img/logo.png" alt="logo" />
          </div>
          <div>
            <motion.button
              whileInView={{ boxShadow: 'none' }}
              type="button"
              className="btn inux-hamburger-menu"
              onClick={() => {
                setOpenNav(!navOpen);
              }}
            >
              {!navOpen ? (
                <img src="./img/hamburger.png" alt="menu" />
              ) : (
                <h1 className="text-white">&times;</h1>
              )}
            </motion.button>
            <div className="d-flex routes-flex">
              {headerRoutes.map((item, index) => (
                <Button variant="link" key={index} href={item.route}>
                  {item.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
        <AnimatePresence>
          {navOpen && (
            <motion.div
              key="mobile-nav"
              className="inux-mobile-nav py-3"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: 'auto' },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {headerRoutes.map((item, index) => (
                <motion.div
                  variants={{ collapsed: { translateY: '50px' }, open: { translateY: '0px' } }}
                  transition={{ duration: 0.3 }}
                  className="d-flex justify-content-end "
                  key={index}
                >
                  <a
                    className="w-100 text-left"
                    onClick={() => {
                      setOpenNav(false);
                    }}
                    href={item.route}
                  >
                    {item.name}
                  </a>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div
        className="content d-md-flex justify-content-between w-100   pt-4"
        // onMouseMove={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        //   setPos({
        //     x: event.nativeEvent.pageX - 15,
        //     y: event.nativeEvent.pageY - 15,
        //   });
        // }}
      >
        <div className="mt-5 pt-3 px-0 px-lg-5">
          <div className="text-content">
            <div className="my-4 d-flex align-items-center top-text-con ">
              <div className="img-con d-flex align-items-center">
                <img src="./img/landing_text_icon.png" alt="icon" />
              </div>
              <p className="mb-0"> Security • Efficiency • Scalability</p>
            </div>

            <div className="mt-5">
              <h2 className="mb-0">
                Decentralized Finance
                {' '}
                <span> Redefined</span>
                {' '}
                <br />
                {' '}
              </h2>

              {/* <h4 className="mt-3">
                <Typewriter
                  options={{
                    strings: ['Affordable ', 'Fast '],
                    autoStart: true,
                    loop: true,
                  }}
                />
                Transactions on the Solana Blockchain
              </h4> */}

              <h4 className="d-none d-md-block mt-3">
                Affordable Transactions on the Solana Blockchain
                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in justo iaculis,
                molestie lectus id, posuere tortor. Pellentesque nisi nisl, auctor */}
              </h4>

              <div className="btn-con d-flex  pt-5 mt-3 align-items-center justify-content-center justify-content-md-start">
                <div className="d-none d-md-block btn-icon-con">
                  <img src="./img/arrow.png" alt="icon" />
                </div>

                <motion.button
                  whileHover={{ translateY: '-5px' }}
                  whileInView={{ boxShadow: 'none' }}
                  type="button"
                  className="d-none  align-items-center btn btn-primary"
                >
                  <Play />
                  WHITEPAPER
                </motion.button>

                {/* <a href="/whitepaper/whitepaper.pdf"> */}
                <motion.button
                  whileHover={{ translateY: '-5px' }}
                  whileInView={{ boxShadow: 'none' }}
                  type="button"
                  className="d-flex align-items-center btn btn-outline-primary whitepaper-button justify-content-center"
                  onClick={() => {
                    router.push('/whitepaper/whitepaper.pdf');
                  }}
                >
                  <Play />
                  WHITEPAPER
                </motion.button>
                {/* </a> */}
              </div>
            </div>
          </div>
        </div>

        <div className="hero-img d-none d-md-flex justify-content-center justify-content-md-end mt-5 mt-md-0 pt-5 pt-md-0">
          <HeroImg />
        </div>
        <div className="d-flex d-md-none justify-content-center my-4 mt-5">
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default Hero;
