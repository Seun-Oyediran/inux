import React, { useEffect } from 'react';
import Lottie from 'react-lottie';
import AOS from 'aos';
import { whyArray } from '../Utils';

interface IWhyInuxItem {
  title: string;
  details: string;
  lottie: any;
  delay: number;
}

const WhyInuxItem = (props: IWhyInuxItem) => {
  const {
    title, details, lottie, delay,
  } = props;
  const options = {
    loop: true,
    autoplay: true,
    animationData: lottie,
  };

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
    <div
      style={{ gap: '1rem' }}
      className="why-inux-item d-md-flex flex-column justify-content-between"
      data-aos="zoom-in-left"
      data-aos-delay={`${delay}`}
    >
      <div>
        <Lottie options={options} />
      </div>
      <div>
        <h3 className="text-center">{title}</h3>
        <p className="text-center">{details}</p>
      </div>
    </div>
  );
};

const WhyInux = () => {
  return (
    <div className="app-container">
      <div className="inux-why-inux-container mb-5">
        <div className="title">
          <h2 className="text-center">Why Inux?</h2>
        </div>

        <div className="why-inux-grid-con">
          {whyArray.map((item, index) => (
            <WhyInuxItem
              title={item.title}
              details={item.details}
              lottie={item.lottie}
              key={index}
              delay={200 * (index + 1)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyInux;
