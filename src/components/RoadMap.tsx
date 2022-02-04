import React, { useEffect } from 'react';
import AOS from 'aos';
import { BigButtonIcon } from '../svgs';
import { quarterItemArray } from '../Utils';

interface IQuarterItem {
  title: string;
  color: string;
  img: string;
  delay: number;
  index: number;
  options: Array<string>;
}

// const RoadAbsoluteItem = () => {
//   return (
//     <div className="absolut-content-item">
//       <div className="img-con">
//         <img src="./img/green_tick.png" alt="green tick" />
//       </div>
//       <h3 className="text-center">Loreum 2022</h3>
//       <div className="dark-box px-3 py-4">
//         <h4 className="text-center">Design</h4>
//         <p className="text-center">Lorem ipsum dolor sit amet</p>
//       </div>
//     </div>
//   );
// };

const QuarterItem = (props: IQuarterItem) => {
  const {
    title, color, img, delay, index, options,
  } = props;

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 50,
      // anchorPlacement: 'bottom-bottom',
    });

    // AOS.refresh();
  }, []);

  return (
    <div className="quarter-item" data-aos="zoom-in" data-aos-delay={`${delay}`}>
      <div className="title mb-3 pb-3">
        <div className="img-con">
          <img src={img} alt="red arrow" />
        </div>
        <h3 style={{ color }}>{title}</h3>
        <h6 style={{ color }}>
          Stage
          {` ${index + 1}`}
        </h6>
      </div>
      {options.map((item, key) => (
        <p key={key} className=" py-1">
          {item}
        </p>
      ))}
    </div>
  );
};

const RoadMap = () => {
  return (
    <div className="app-container">
      <div className="inux-roadmap-container">
        <div className="title">
          <div className="btn-con d-flex justify-content-center">
            <button type="button" className="btn d-flex justify-content-center align-items-center">
              <BigButtonIcon />
              {' '}
              Road Map
            </button>
          </div>

          <div className="text">
            <h2 className="text-center">Our Strategy & Roadmap</h2>
            <p className="text-center my-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Morbi.
            </p>
          </div>
        </div>

        {/* <div className="d-none d-md-block content large-screens">
          <div className="img-con large-img">
            <img src="./img/roadmap_img.png" alt="roadmap" className="w-100" />
          </div>
          <div className="absolute-content first d-flex justify-content-around">
            <RoadAbsoluteItem />
            <RoadAbsoluteItem />
            <RoadAbsoluteItem />
          </div>
          <div className="absolute-content second d-flex justify-content-around">
            <RoadAbsoluteItem />
            <RoadAbsoluteItem />
          </div>

          <div className="absolute-content third d-flex justify-content-around">
            <RoadAbsoluteItem />
            <RoadAbsoluteItem />
            <RoadAbsoluteItem />
          </div>
        </div>

        <div className="d-md-none">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
            <div className="d-flex justify-content-center my-5" key={i}>
              <RoadAbsoluteItem />
            </div>
          ))}
        </div> */}

        <div className="quarter-review-container my-5">
          <div className="grid-con ">
            {quarterItemArray.map((item, i) => (
              <QuarterItem
                key={i}
                color={item.color}
                title={item.title}
                img={item.img}
                delay={200 * (i + 1)}
                index={i}
                options={item.options}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
