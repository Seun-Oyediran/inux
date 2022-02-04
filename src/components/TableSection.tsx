import React, { useEffect, useState } from 'react';
import { cryptoFormatter } from '../Utils';
import { fetchTableCoins } from '../axios';

const mins = 10;

const TableSection = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchTableCoins(15);

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
      <div className="inux-table-section-container py-2 py-md-5">
        {/* <div className="currency-market-con mt-2 mt-md-5 pt-2 pt-md-5">
          <div className="d-md-flex justify-content-between align-items-end market px-4 py-5">
            <div>
              <h3>Currency Market</h3>
              <div className="d-flex align-items-center market-price">
                <h5>-0.16%</h5>
                <h6 className="mb-0">Lorem ipsum dolor sit amet, conset</h6>
              </div>
            </div>
            <div className="d-flex align-items-center input-con mt-4 mt-md-0">
              <p className="mb-0">Search:</p> <input type="text" />
            </div>
          </div>
        </div> */}

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
                    Price
                    {' '}
                    <img src="./img/table_header_icon.svg" alt="icon" />
                  </button>
                </th>
                <th>
                  <button type="button" className="btn w-100 d-flex justify-content-between">
                    24h
                    <img src="./img/table_header_icon.svg" alt="icon" />
                  </button>
                </th>
                <th>
                  <button type="button" className="btn w-100 d-flex justify-content-between">
                    24h Volume
                    {' '}
                    <img src="./img/table_header_icon.svg" alt="icon" />
                  </button>
                </th>
                <th>
                  <button type="button" className="btn w-100 d-flex justify-content-between">
                    Market Cap
                    {' '}
                    <img src="./img/table_header_icon.svg" alt="icon" />
                  </button>
                </th>
                <th>
                  <button type="button" className="btn w-100 d-flex justify-content-between">
                    ATH
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
              {tableData.map((item: any, index) => (
                <tr key={index}>
                  <td className="text-white" colSpan={2}>
                    <div className="d-flex first align-items-center">
                      <img src={item?.image} alt={item?.name} />
                      <p className="mb-0">{item?.name}</p>
                    </div>
                  </td>
                  <td className="align-middle">
                    <p className="mb-0">{cryptoFormatter.format(item?.current_price)}</p>
                  </td>
                  <td className="align-middle">
                    <div className="d-flex chart align-items-center">
                      {item?.market_cap_change_percentage_24h < 0 ? (
                        <img src="./img/table_fall_icon.svg" alt="fall icon" />
                      ) : (
                        <img src="./img/table_rise_icon.svg" alt="rise icon" />
                      )}

                      <p className="mb-0">
                        {item?.market_cap_change_percentage_24h.toFixed(2)}
                        %
                      </p>
                    </div>
                  </td>
                  <td className="align-middle">
                    <p className="mb-0">{cryptoFormatter.format(item?.total_volume)}</p>
                  </td>
                  <td className="align-middle">
                    <p className="mb-0">{cryptoFormatter.format(item?.market_cap)}</p>
                  </td>
                  <td className="align-middle">
                    <p className="mb-0">
                      {' '}
                      {cryptoFormatter.format(item?.ath)}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* <div className="quarter-review-container mt-5">
          <div className="grid-con ">
            {quarterItemArray.map((item, i) => (
              <QuarterItem
                key={i}
                color={item.color}
                title={item.title}
                img={item.img}
                delay={200 * (i + 1)}
              />
            ))}
          </div>
        </div> */}

        <hr className="table-bottom-divider" />
      </div>
    </div>
  );
};

export default TableSection;
