import React from "react";
import "./Footer.scss";
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top row">
          <div className="col-lg-3 col-6">
            <h3 className="title">GIỚI THIỆU</h3>

            <ul className="">
              <li className="mb-2">
                <a href="#">
                  <i className="fa fa-angle-double-right"></i>
                  VỂ CHÚNG TÔI
                </a>
              </li>
              <li className="mb-2">
                <a href="#">
                  <i className="fa fa-angle-double-right"></i>
                  THỎA THUẬN SỬ DỤNG
                </a>
              </li>
              <li className="mb-2">
                <a href="#">
                  {" "}
                  <i className="fa fa-angle-double-right"></i>
                  QUY CHẾ HOẠT ĐỘNG
                </a>
              </li>
              <li className="mb-2">
                <a href="#">
                  {" "}
                  <i className="fa fa-angle-double-right"></i>
                  CHÍNH SÁCH BẢO MẬT
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-6">
            <h3 className="title">GÓC ĐIỆN ẢNH </h3>

            <ul className="">
              <li className="mb-2">
                <a href="#">
                  <i className="fa fa-angle-double-right"></i>
                  THỂ LOẠI PHIM
                </a>
              </li>
              <li className="mb-2">
                <a href="#">
                  {" "}
                  <i className="fa fa-angle-double-right"></i>
                  BÌNH LUẬN PHIM{" "}
                </a>
              </li>
              <li className="mb-2">
                <a href="#">
                  {" "}
                  <i className="fa fa-angle-double-right"></i>
                  GÓC ĐIỆN ẢNH{" "}
                </a>
              </li>
              <li className="mb-2">
                <a href="#">
                  {" "}
                  <i className="fa fa-angle-double-right"></i>
                  PHIM HAY THÁNG{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-6">
            <h3 className="title">HỖ TRỢ </h3>

            <ul className="">
              <li className="mb-2">
                <a href="#">
                  <i className="fa fa-angle-double-right"></i>
                  GÓP Ý{" "}
                </a>
              </li>
              <li className="mb-2">
                <a href="#">
                  {" "}
                  <i className="fa fa-angle-double-right"></i>
                  SALE & SERVICE
                </a>
              </li>
              <li className="mb-2">
                <a href="#">
                  {" "}
                  <i className="fa fa-angle-double-right"></i>
                  RẠP / GIÁ VÉ{" "}
                </a>
              </li>
              <li className="mb-2">
                <a href="#">
                  {" "}
                  <i className="fa fa-angle-double-right"></i>
                  TUYỂN DỤNG{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-6">
            <ul className="apps">
              <li className="mb-4">
                {" "}
                <h3 className="title">KẾT NỐI GALAXY CINEMA</h3>
                <a href="#">
                  <i className="fab fa-facebook-square"></i>{" "}
                </a>
                <a href="#">
                  <i className="fab fa-youtube-square"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="mb-2">
                <h3 className={` pb-4 text-sm font-bold`}>DOWNLOAD APP</h3>
                <a href="#">
                  <i className="fab fa-apple"></i>{" "}
                </a>
                <a href="#">
                  <i className="fab fa-google-play"></i>{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom ">
        <div className="container">
          <div className="">
            <span>
              Công Ty Cổ Phần Phim Thiên Ngân, Tầng 5, Toà Nhà Mặt Trời Sông
              Hồng, 23 Phan Chu Trinh, Phường Phan Chu Trinh, Quận Hoàn Kiếm, Hà
              Nội Xem thêm tại: https://www.galaxycine.vn/
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
