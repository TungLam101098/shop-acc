import React from "react";
import "./register.scss";
// import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

export const Register = ({ submitButton, getDataFromRegister }) => {
  var val = Math.floor(1000 + Math.random() * 9000);
  const [valueInput, setValue] = React.useState({
    email: "",
    password: "",
    respassword: "",
    displayName: "",
    phone: "",
    address: "",
    val: val
  });
  const [styleInput, setStyleInput] = React.useState("");
  
  // let history = useHistory();

  const handleChange = (evt) => {
    const value = evt.target.value;
    if (evt.target.name === "respassword") {
      let inputRespassword = evt.target.value;
      if (inputRespassword !== valueInput.password) {
        setStyleInput("1px solid red");
      } else {
        setStyleInput("1px solid #ced4da");
      }
    } else if (evt.target.name === "password") {
      let inputpassword = evt.target.value;
      if (inputpassword !== valueInput.respassword) {
        setStyleInput("1px solid red");
      } else {
        setStyleInput("1px solid #ced4da");
      }
    }
    setValue({
      ...valueInput,
      [evt.target.name]: value,
    });
  };
  const registerSubmit = (e) => {
    e.preventDefault();
    if (valueInput.password !== valueInput.respassword) {
      alert("Mật khẩu không khớp!!!");
    } else {
      // emailjs
      //   .sendForm(
      //     "service_dcsbm1i",
      //     "template_zmnuzjk",
      //     e.target,
      //     "user_FAeCTZsbyipDdR6bK5EiJ"
      //   )
      //   .then(
      //     (result) => {
      //       console.log(result.text);
      //     },
      //     (error) => {
      //       console.log(error.text);
      //     }
      //   );
      // window.location.href = '/confirm';
      getDataFromRegister(valueInput);
      // history.push("/confirm");
      submitButton();
    }
  };

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 login-form-1">
          <h3>Register</h3>
          <form name="formRegister" onSubmit={registerSubmit}>
            <div className="form-group">
              <input name="message" defaultValue={val} hidden />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control inputform"
                placeholder="Email"
                name="email"
                value={valueInput.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control inputform"
                placeholder="Mật khẩu"
                name="password"
                value={valueInput.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                style={{ border: styleInput }}
                className="form-control inputform"
                placeholder="Nhập lại mật khẩu"
                name="respassword"
                value={valueInput.respassword}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control inputform"
                placeholder="Họ và tên"
                name="displayName"
                value={valueInput.displayName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control inputform"
                placeholder="SĐT"
                name="phone"
                value={valueInput.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control inputform"
                placeholder="Địa chỉ"
                name="address"
                value={valueInput.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Đăng ký" />
            </div>
            <div className="form-group">
              <Link to="/" className="ForgetPwd">
                Đăng Nhập
              </Link>
            </div>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};
