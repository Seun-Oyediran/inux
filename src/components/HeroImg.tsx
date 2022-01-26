import { motion } from 'framer-motion';
import React from 'react';
import Counter from './Counter';

const HeroImg = () => {
  return (
    <motion.div>
      <div className="gradient-img-con">
        <img src="./img/landing_gradient.png" alt="gradient" />
        <div className="bitcoin-img-con">
          <img src="./img/big_center_bitcoin.png" alt="bitcoin" />
        </div>
        <div className="yellow-img-con">
          <img src="./img/yellow_img.png" alt="icon" />
        </div>
        <div className="green-bitcoin-img-con">
          <img src="./img/green_bitcoin.png" alt="icon" />
        </div>
        <div className="sold-img-con">
          <img src="./img/sold.png" alt="icon" />
        </div>
        <div className="lower-item-icon">
          <div className="d-flex justify-content-between">
            <Counter />
            <div className="lower-icon-con">
              <img src="./img/lower_icon.png" alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroImg;
