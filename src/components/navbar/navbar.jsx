import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { auth } from "../../firebase/firebase.untils";
import { selectCurrentUser } from "../../redux/user/user.selector";

import "./navbar.scss";

const Navbar = ({ currentUser }) => {
  return (
    <div id="carousel">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="http://sushikei.vn/wp-content/uploads/2019/07/banner_web-1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="http://sushikei.vn/wp-content/uploads/2020/02/Banner-website-.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://sushikei.vn/wp-content/uploads/2020/02/Banner-website-.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <nav className="navbar fixed-top">
        <div className="nav-links">
          <Link to="/" className="nav-links scroll-link">
            <i className="fa fa-home" aria-hidden="true"></i> Trang chủ
          </Link>
          <Link to="/" className="nav-links scroll-link">
            Thực đơn
          </Link>
          <Link to="/order" className="nav-links scroll-link">
            Đặt bàn
          </Link>
          {currentUser ? (
            <Link to="/account" className="nav-links scroll-link">
              {currentUser.displayName}
            </Link>
          ) : (
            <Link to="/sigin" className="nav-links scroll-link">
              Đăng nhập
            </Link>
          )}
          {currentUser && (
            <Link
              to="/sigin"
              onClick={() => auth.signOut()}
              className="nav-links scroll-link"
            >
              Đăng xuất
            </Link>
          )}
          {currentUser && (
            <Link to="/" className="nav-links scroll-link">
              Đơn đặt
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Navbar);
