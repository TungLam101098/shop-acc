import React, { useState } from "react";

import "./sigin.scss";
import { signInWithGoogle } from '../../firebase/firebase.untils';
import { Link } from "react-router-dom";
import { auth } from '../../firebase/firebase.untils';

const SigIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [style, setStyle] = useState("none");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = user.email;
    const password = user.password;

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      setStyle('block');
      console.log(err);
    }
  };

  const handleChange = (target) => {
    setUser({
      ...user,
      [target.name]: target.value,
    });
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
              style={{ color: "rgb(39, 46, 139)", display: `${style}` }}
            >
              Đăng nhập thất bại
            </h3>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                name="email"
                onChange={(e) => handleChange(e.target)}
                value={user.email}
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
                onClick={signInWithGoogle}
                value="GG"
              />
            </div>

            <div className="form-group">
              <Link to="/register" className="ForgetPwd">
                Đăng ký?
              </Link>
            </div>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default SigIn;
