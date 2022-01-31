import React from 'react';
import { BigButtonIcon } from '../svgs';

const RoadAbsoluteItem = () => {
  return (
    <div className="absolut-content-item">
      <div className="img-con">
        <img src="./img/green_tick.png" alt="green tick" />
      </div>
      <h3 className="text-center">Loreum 2022</h3>
      <div className="dark-box px-3 py-4">
        <h4 className="text-center">Design</h4>
        <p className="text-center">Lorem ipsum dolor sit amet</p>
      </div>
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

        <div className="d-none d-md-block content large-screens">
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
      </div>
    </div>
  );
};

export default RoadMap;
