import React from 'react';
import { quarterItemArray } from '../Utils';

interface IQuarterItem {
  title: string;
  color: string;
  img: string;
}

const QuarterItem = (props: IQuarterItem) => {
  const { title, color, img } = props;

  return (
    <div className="quarter-item">
      <div className="title mb-5 pb-3">
        <div className="img-con">
          <img src={img} alt="red arrow" />
        </div>
        <h3 style={{ color }}>{title}</h3>
        <h6 style={{ color }}>
          2021
          {title}
        </h6>
      </div>
      <p className="my-4 py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi.</p>
      <p className="my-4 py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi.</p>
      <p className="my-4 py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi.</p>
    </div>
  );
};

const TableSection = () => {
  return (
    <div className="app-container">
      <div className="inux-table-section-container py-5">
        <div className="currency-market-con mt-5 pt-5">
          <div className="d-flex justify-content-between align-items-end market px-4 py-5">
            <div>
              <h3>Currency Market</h3>
              <div className="d-flex align-items-center market-price">
                <h5>-0.16%</h5>
                <h6 className="mb-0">Lorem ipsum dolor sit amet, conset</h6>
              </div>
            </div>
            <div className="d-flex align-items-center input-con">
              <p className="mb-0">Search:</p>
              {' '}
              <input type="text" />
            </div>
          </div>
        </div>

        <div className="table-responsive my-5 scrollbar horizontal">
          <table className="inux-table table">
            <thead>
              <tr>
                <th className="text-white" colSpan={2}>
                  <button type="button" className="btn w-100 d-flex justify-content-between">
                    All Tokens
                    {' '}
                    <img src="./img/table_all_tokens.svg" alt="icon" />
                  </button>
                </th>
                <th>
                  <button type="button" className="btn w-100 d-flex justify-content-between">
                    Loreum
                    {' '}
                    <img src="./img/table_header_icon.svg" alt="icon" />
                  </button>
                </th>
                <th>
                  <button type="button" className="btn w-100 d-flex justify-content-between">
                    Loreum
                    {' '}
                    <img src="./img/table_header_icon.svg" alt="icon" />
                  </button>
                </th>
                <th>
                  <button type="button" className="btn w-100 d-flex justify-content-between">
                    Loreum
                    {' '}
                    <img src="./img/table_header_icon.svg" alt="icon" />
                  </button>
                </th>
                <th>
                  <button type="button" className="btn w-100 d-flex justify-content-between">
                    Loreum
                    {' '}
                    <img src="./img/table_header_icon.svg" alt="icon" />
                  </button>
                </th>
                <th>
                  <button type="button" className="btn w-100 d-flex justify-content-between">
                    Loreum
                    {' '}
                    <img src="./img/table_header_icon.svg" alt="icon" />
                  </button>
                </th>
                {/* <th className="text-white">Loreum</th> */}
                {/* <th>AMOUNT</th>
                <th className="text-center">STATUS</th>
                <th className="text-center">Action</th> */}
              </tr>
            </thead>
            <tbody>
              {[1, 1, 0, 1, 0, 1, 0, 1, 0].map((item, index) => (
                <tr key={index}>
                  <td className="text-white" colSpan={2}>
                    <div className="d-flex first align-items-center">
                      <img src="./img/table_bitcoin_icon.svg" alt="bitcoin icon" />
                      <p className="mb-0">Binance coin</p>
                    </div>
                  </td>
                  <td className="align-middle">
                    <p className="mb-0">$566900.99</p>
                  </td>
                  <td className="align-middle">
                    <div className="d-flex chart align-items-center">
                      {item === 1 ? (
                        <img src="./img/table_fall_icon.svg" alt="fall icon" />
                      ) : (
                        <img src="./img/table_rise_icon.svg" alt="fall icon" />
                      )}

                      <p className="mb-0">2.90%</p>
                    </div>
                  </td>
                  <td className="align-middle">
                    <p className="mb-0">$78,980,200.89</p>
                  </td>
                  <td className="align-middle">
                    <p className="mb-0">20M</p>
                  </td>
                  <td className="align-middle">
                    <p className="mb-0"> $43,089.200</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="quarter-review-container mt-5">
          <div className="grid-con ">
            {quarterItemArray.map((item, i) => (
              <QuarterItem key={i} color={item.color} title={item.title} img={item.img} />
            ))}
          </div>
        </div>

        <hr className="table-bottom-divider" />
      </div>
    </div>
  );
};

export default TableSection;
