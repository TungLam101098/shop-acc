import React from 'react';
import './orderDate.scss';
import { useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const OrderDate = () => {
  const [valueSelect, setValueSelect] = useState({
    quantityCustomer: '1',
    date: new Date()
  });

  const handleChange = (event) => {
    setValueSelect({...valueSelect, [event.target.name]: event.target.value});
  }
  const handleChangeDate = (date) => {
    setValueSelect({...valueSelect, date: date});
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Your favorite flavor is: ' + valueSelect.date);
  }
  
  return (
    <div>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <section className="section-order-product">
              <div className="section-order-title-wrapper" id="title-order">
                <h5 className="title">Thông tin đặt bàn</h5>
                <p className="title-detail">(Vui lòng đặt bàn trước giờ dùng bữa ít nhất 1 tiếng)</p>
              </div>
              <div className="section-order-input">
                <div className="row" id="detail-order">
                  <div className="col-lg-6">
                    <select value={valueSelect.quantityCustomer} className="custom-select" onChange={(e) => handleChange(e)} name="quantityCustomer" required>
                      <option value={'1'}>1 khách</option>
                      <option value={'2'}>2 khách</option>
                      <option value={'3'}>3 khách</option>
                      <option value={'4'}>4 khách</option>
                      <option value={'5'}>5 khách</option>
                      <option value={'6'}>6 khách</option>
                      <option value={'7'}>7 khách</option>
                      <option value={'8'}>8 khách</option>
                      <option value={'9'}>9 khách</option>
                      <option value={'10'}>10 khách</option>
                      <option value={'11'}>11 khách</option>
                      <option value={'12'}>12 khách</option>
                      <option value={'13'}>13 khách</option>
                      <option value={'14'}>14 khách</option>
                      <option value={'15'}>15 khách</option>
                      <option value={'16'}>16 khách</option>
                      <option value={'17'}>17 khách</option>
                      <option value={'18'}>18 khách</option>
                      <option value={'19'}>19 khách</option>
                      <option value={'20'}>20 khách</option>
                    </select>
                  </div>
                  <div className="col-lg-6" id="date1">
                  <DatePicker selected={valueSelect.date} onChange={(date) => handleChangeDate(date)} showTimeSelect dateFormat="Pp" className="custom-select" required />
                  </div>
                </div>
              </div>
              <button type="submit" className="order-submit">Đặt bàn</button>
            </section></form>
        </div>
        <section className="footer" />
      </div>
  )
}

export default OrderDate
