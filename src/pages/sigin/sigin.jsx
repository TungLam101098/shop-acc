import React, { useState } from "react";
import "./sigin.scss";

const SigIn = () => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  const handleChange = (target) => {
    setUser({
      ...user,
      [target.name]: target.value,
    });
  };

  const SignInWithGoogle = () => {
    console.log("sign in with gg");
  };

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 login-form-1">
          <h3>Login</h3>
          <form name="formLogin" onSubmit={handleSubmit}>
            <h3
              id="trangthai"
              style={{ color: "rgb(39, 46, 139)", display: "none" }}
            >
              Đăng nhập thất bại
            </h3>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Tên đăng nhập"
                name="userName"
                onChange={(e) => handleChange(e.target)}
                value={user.userName}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Mật khẩu"
                name="password"
                onChange={(e) => handleChange(e.target)}
                value={user.password}
              />
            </div>

            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Đăng nhập" />
              <input
                type="button"
                className="btnSubmit"
                onClick={SignInWithGoogle}
                value="GG"
              />
            </div>

            <div className="form-group">
              <a href="register.html" className="ForgetPwd">
                Đăng ký?
              </a>
            </div>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default SigIn;
