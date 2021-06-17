import React from "react";
import { connect } from "react-redux";
import { updateUserProfileDocument } from "../../firebase/firebase.untils";
import "./account.scss";
import { useHistory } from "react-router-dom";

const Account = ({ currentUser }) => {
  let history = useHistory();
  if (!currentUser) {
    return 'Loading';
  }
  
  const submitUser = (e) => {
    e.preventDefault();
    const infoUser = {
      displayName: e.target[0].value,
      phone: e.target[1].value,
      address: e.target[2].value
    }
    updateUserProfileDocument(currentUser.id, infoUser);
    alert('Cập nhật thành công !');
    history.push("/");
  };
  const handleChange = (e) => {

  }

  return (
    <div className="container">
      <form onSubmit={(e) => submitUser(e)}>
        <section className="section-order-product">
          <div className="section-order-title-wrapper" id="title-order">
            <h5 className="title">Cập nhật thông tin khách hàng</h5>
          </div>
          <div className="section-order-input">
            <div className="row" id="detail-order">
              <div className="form-group col-lg-12">
                <input
                  type="text"
                  className="form-control inputform"
                  placeholder="Họ và tên"
                  defaultValue = {currentUser.displayName}
                  onChange={(e) => handleChange(e) }
                  name="displayName"
                  required
                />
              </div>
              <div className="form-group col-lg-12">
                <input
                  type="text"
                  className="form-control inputform"
                  placeholder="SĐT"
                  defaultValue={currentUser.phone}
                  onChange={(e) => handleChange(e) }
                  name="phone"
                  required
                />
              </div>
              <div className="form-group col-lg-12">
                <input
                  type="text"
                  className="form-control inputform"
                  placeholder="Địa chỉ"
                  defaultValue={currentUser.address}
                  onChange={(e) => handleChange(e) }
                  name="address"
                  required
                />
              </div>
            </div>
          </div>
          <button type="submit" className="order-submit">
            Xác nhận
          </button>
        </section>
      </form>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps)(Account);
