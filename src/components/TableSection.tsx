import React from 'react';

const TableSection = () => {
  return (
    <div className="app-container">
      <div className="inux-table-section-container">
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
      </div>
    </div>
  );
};

export default TableSection;
