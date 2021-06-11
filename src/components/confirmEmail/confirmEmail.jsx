import React from "react";
import './confirmEmail.scss';

import { auth, createUserProfileDocument } from '../../firebase/firebase.untils';

export const ConfirmEmail = ({data}) => {
  const [dataInput, SetdataInput] = React.useState("");
  const [styleInput, setStyleInput] = React.useState({
    color: "rgb(39, 46, 139)",
    display: "none"
  })
  console.log(data);
  const submitEmail = async (e) => {
    e.preventDefault();
    if (parseInt(dataInput) === parseInt(data.val)) {
      try {
        const displayName = data.displayName;
        const { user } = await auth.createUserWithEmailAndPassword(
          data.email,
          data.password
        );
        createUserProfileDocument(user, { displayName });
      } catch(err) {
        console.log(err);
      }
    } else {
      setStyleInput({...styleInput, display: "block"})
    }
    
  }

  const handleChange = (e) => {
    SetdataInput(e.target.value);
  }

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 login-form-1">
          <h3>Xác nhận Email</h3>
          <form name="formLogin" onSubmit={submitEmail}>
            <h3 id="trangthai" style={{ color: styleInput.color, display: styleInput.display}}>
              Sai mã xác nhận
            </h3>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Mã xác nhận"
                name="email"
                onChange={handleChange}
                value={dataInput}
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                className="btnSubmit"
                value="Xác nhận"
              />
            </div>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};
