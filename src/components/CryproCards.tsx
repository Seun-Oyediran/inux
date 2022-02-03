import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import { fetchTableCoins } from '../axios';
import { cryptoCardFormatter } from '../Utils';

interface ICryptoCard {
  img?: string;
  symbol?: string;
  name?: string;
  price?: number;
}

const mins = 10;

const CryptoCard = (props: ICryptoCard) => {
  const {
    img, symbol, name, price,
  } = props;

  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 500,
      easing: 'ease-in-sine',
      delay: 50,
      anchorPlacement: 'bottom-bottom',
    });
    // AOS.refresh();
  }, []);

  return (
    <div className="crypto-card" data-aos="flip-left">
      <div className="child d-flex  justify-content-center ">
        <div>
          <div className="icon-con">
            <img src={img} alt="bitcoin" />
          </div>
          <h5>{name}</h5>
          <p>
            USD
            {cryptoCardFormatter.format(price)}
          </p>
        </div>
        <div
          className="d-flex flex-column  justify-content-between align-items-end"
          style={{ height: '100%' }}
        >
          <div className="stock-con">
            <img src="./img/stocks.png" alt="stocks" />
          </div>
          <h6 className="text-uppercase">{symbol}</h6>
        </div>
      </div>
    </div>
  );
};

const CryproCards = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchTableCoins(3);

      setTableData(data);
    };

    getData();

    const interval = setInterval(() => {
      getData();
    }, 1000 * mins * 60);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="app-container">
      <div className="py-4 crypro-cards-grid-container">
        <div className="crypro-cards-grid-con">
          {tableData.map((item: any, i) => (
            <CryptoCard
              img={item?.image}
              key={i}
              symbol={item?.symbol}
              name={item?.name}
              price={item?.current_price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryproCards;
