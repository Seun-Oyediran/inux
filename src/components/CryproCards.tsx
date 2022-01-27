import React from 'react';

interface ICryptoCard {
  img: string;
}

const iconsArray = ['./img/card_logo_1.png', './img/card_logo_2.png', './img/card_logo_3.png'];

const CryptoCard = (props: ICryptoCard) => {
  const { img } = props;
  return (
    <div className="crypto-card ">
      <div className="child d-flex  justify-content-center ">
        <div>
          <div className="icon-con">
            <img src={img} alt="bitcoin" />
          </div>
          <h5>Lorem coin</h5>
          <p>USD 10,000.00</p>
        </div>
        <div
          className="d-flex flex-column  justify-content-between align-items-end"
          style={{ height: '100%' }}
        >
          <div className="stock-con">
            <img src="./img/stocks.png" alt="stocks" />
          </div>
          <h6>BTC</h6>
        </div>
      </div>
    </div>
  );
};

const CryproCards = () => {
  return (
    <div className="app-container">
      <div className="py-4 crypro-cards-grid-container">
        <div className="crypro-cards-grid-con">
          {iconsArray.map((item, i) => (
            <CryptoCard img={item} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryproCards;
