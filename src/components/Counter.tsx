import React, { useEffect, useState } from 'react';
import { getTimeDiff } from '../Utils';

interface ICounterItem {
  bg: string;
  unit: string;
  value: number;
}

const defaultCounterData = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  ended: true,
};

const CounterItem = (props: ICounterItem) => {
  const { bg, unit, value } = props;

  return (
    <div className="counter-border">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ backgroundColor: bg, width: '45px' }}
      >
        <h4 className="counter-value mb-0">{value}</h4>
      </div>
      <h6 className="text-center mt-2 mb-0">{unit}</h6>
    </div>
  );
};

const Counter = () => {
  const [counterData, setCounterData] = useState(defaultCounterData);

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log('now');

      const time = getTimeDiff(
        1645999999999,
        new Date().getTime(),
        //  + 604800000
      );
      // console.log(time);

      setCounterData(time);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" d-flex pb-2">
      <div className="counter-con px-3 py-2 pb-4">
        <p className="text-center">Countdown to launch</p>
        <div className="d-flex justify-content-center counter-item-con">
          <CounterItem bg="#37a2fd" value={counterData.days} unit="Days" />
          <CounterItem bg="#59B313" value={counterData.hours} unit="Hours" />
          <CounterItem bg="#FFDB5C" value={counterData.minutes} unit="Minutes" />
          <CounterItem bg="#D017BE" value={counterData.seconds} unit="Seconds" />
        </div>
      </div>
    </div>
  );
};

export default Counter;
