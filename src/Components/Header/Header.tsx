import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

import cn from "classnames";

import "./HeaderStyle.scss";
import galaxyLogo from "Assets/Images/galaxy-logo.png";
import galaxyLogoMobile from "Assets/Images/galaxy-logo-mobile.png";
type Props = {};

const Header = (props: Props) => {
  const toggleNavButton = useRef<HTMLAnchorElement>(null);
  const toggleMenuNav = useRef<HTMLDivElement>(null);
  const toggleClassNav = () => {
    console.log(toggleMenuNav);
    if (toggleMenuNav) {
      toggleMenuNav.current?.classList.toggle("active");
    }
  };
  return (
    <header className=" header">
      <div className="container">
        <nav className="navbar">
          <div className="row">
            <div className="col-4">
              <NavLink
                to={"/home"}
                children={
                  <img src={galaxyLogo} alt="" className="header-logo" />
                }
              />
              <NavLink
                to={"/home"}
                children={
                  <img
                    src={galaxyLogoMobile}
                    alt=""
                    className="header-logo-mobile"
                  />
                }
              />
            </div>
            <div className="col-8 secondary-nav">
              <div className="search">
                <div className="search-field">
                  <input
                    type="text"
                    className="search-movie-input"
                    id="searchMovie"
                    placeholder="Tìm tên phim"
                  />
                  <i className="fa fa-search search-icon"></i>
                </div>
              </div>

              <div className="header-user">
                <div className="left">
                  <a href="#">
                    <i className="fa fa-user"></i>
                    <span>Đăng nhập</span>
                  </a>
                </div>
                <div className="nav-menu">
                  <a
                    href="#"
                    className="toggle-nav"
                    ref={toggleNavButton}
                    onClick={() => {
                      toggleClassNav();
                    }}
                  >
                    <i className="fa fa-bars"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="toggle-menu-nav" ref={toggleMenuNav}>
          <div className="toggle-menu-nav-content">
            <div className="item">
              <div className="search">
                <div className="search-field">
                  <input
                    type="text"
                    className="search-movie-input"
                    id="searchMovie"
                    placeholder="Tìm tên phim"
                  />
                  <i className="fa fa-search search-icon"></i>
                </div>
              </div>
            </div>
            <div className="item">
              <a href="#">MUA VÉ</a>
            </div>
            <div className="item">
              <a href="#">PHIM</a>
            </div>
            <div className="item">
              <a href="#">GÓC ĐIỆN ẢNH</a>
            </div>
            <div className="item">
              <a href="#">RẠP</a>
            </div>
            <div className="item">
              <a href="#">THÀNH VIÊN</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
