import React from "react";
import "./homepage.scss";

const Homepage = () => {
  return (
    <div>
      <div className="container">
        <section className="section about">
          {/* about center */}
          <div className="row" id="about-1">
            <div className="col-lg-5 col-md-6 col-sm-12">
              <article className="about-info">
                <h2>sushi kei</h2>
                <h5>Nhà hàng ẩm thực Nhật Bản</h5>
                <p>
                  Sushi Kei - từ Kei có nghĩa là niềm vui, niềm hạnh phúc trong
                  tiếng Nhật. Sushi Kei gợi liên tưởng về cảm giác vui tươi, hào
                  hứng và mong muốn tạo sự hài lòng cao nhất cho thực khách khi
                  được thưởng thức các món ăn Nhật Bản tươi ngon, chọn lọc tại
                  nhà hàng.
                </p>
                <p>
                  Điểm nhấn tại Sushi Kei chính là sashimi - món ăn “thật thà”
                  nhất bởi những lát cắt tinh tế luôn giữ được nguyên hương vị
                  đại dương mộc mạc, sử dụng từ những phần cá tươi ngon nhất,
                  từng lát cá căng bóng mềm mọng, ngọt đậm đà, vị mát lạnh và
                  béo ngậy đặc trưng.
                </p>
              </article>
            </div>
            <div className="col-lg-7 col-md-6 col-sm-12">
              <article id="about-img">
                <img
                  src="https://tinyurl.com/y42hhyq5"
                  className="mw-100"
                  alt="sushi"
                />
              </article>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7 col-md-6 col-sm-12">
              <article id="about-img">
                <img
                  src="https://tinyurl.com/yydw5nge"
                  className="mw-100"
                  alt="sushi"
                />
              </article>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12">
              <article id="about-info">
                <h2>Chuyên gia ẩm thực</h2>
                <h5>
                  Chiba Kazuhio - Người đầu bếp tài hoa với 30 năm kinh nghiệm
                </h5>
                <p>
                  Chuyên gia Chiba Kazuhiko luôn tâm niệm rằng: “Ăn ngon vì sức
                  khỏe”. Chính vì thế tại Sushi Kei, cách chế biến món ăn luôn
                  hạn chế sử dụng đường và không sử dụng các gia vị hóa học, chỉ
                  chú trọng vào việc làm nổi bật sự tươi ngon, thuần khiết tự
                  nhiên của thực phẩm.
                </p>
                <p>
                  Các món ăn của bếp trưởng Chiba chinh phục mọi giác quan bởi
                  hương vị đậm chất Nhật Bản cùng cách bài trí tỉ mỉ, tinh tế và
                  gói trọn cả tình yêu với nghề của người đầu bếp.
                </p>
              </article>
            </div>
          </div>
        </section>
        <div className="container-fluid">
          <section className="section-featured">
            <div className="title-wrapper">
              <h2 className="title">Món ăn đặc sắc</h2>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src="http://sushikei.vn/wp-content/uploads/2019/07/menu_dac_sac_1.jpg"
                    alt="card"
                  />
                  <div className="card-body">
                    <h5 className="card-text">sashimi tươi mát</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src="http://sushikei.vn/wp-content/uploads/2019/07/menu_dac_sac_2.jpg"
                    alt="card"
                  />
                  <div className="card-body">
                    <h5 className="card-text">sushi thơm mềm</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src="http://sushikei.vn/wp-content/uploads/2019/07/menu_dac_sac_3.jpg"
                    alt="card"
                  />
                  <div className="card-body">
                    <h5 className="card-text">tempura</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src="http://sushikei.vn/wp-content/uploads/2019/07/menu_dac_sac_8.jpg"
                    alt="card"
                  />
                  <div className="card-body">
                    <h5 className="card-text">lẩu đậm đà</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src="http://sushikei.vn/wp-content/uploads/2019/07/menu_dac_sac_4.jpg"
                    alt="card"
                  />
                  <div className="card-body">
                    <h5 className="card-text">món nướng </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src="http://sushikei.vn/wp-content/uploads/2019/08/menu_dac_sac.jpg"
                    alt="card"
                  />
                  <div className="card-body">
                    <h5 className="card-text">lươn cuộn trứng</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src="http://sushikei.vn/wp-content/uploads/2019/08/vuông-1.jpg"
                    alt="card"
                  />
                  <div className="card-body">
                    <h5 className="card-text">cơm cá hồi</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src="http://sushikei.vn/wp-content/uploads/2019/07/menu_dac_sac_5.jpg"
                    alt="card"
                  />
                  <div className="card-body">
                    <h5 className="card-text">salad thanh ngọt</h5>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="container">
          <section className="section-space">
            <div className="row">
              <div className="col-lg-5 col-md-6 col-sm-12">
                <article className="space-info">
                  <h2>Không gian</h2>
                  <h5>Nhà hàng đầm ấm, đậm chất Nhật Bản</h5>
                  <p>
                    Không gian Sushi Kei kết hợp giữa truyền thống và hiện đại
                    nhưng vẫn mang tới cho thực khách cảm giác đậm chất Nhật
                    Bản. Từ những trang trí hoa văn tinh tế trên tường, trần nhà
                    hàng đến thiết kế quầy bar, bếp lịch sự, Sushi Kei thực sự
                    là một Nhật Bản thu nhỏ giữa đất Việt.
                  </p>
                  <p>
                    Trang trí tường cũng như bàn ghế với màu cam và xanh lá cây
                    chủ đạo tạo sự gần gũi với thiên nhiên như trong văn hóa
                    Nhật. Nhà hàng Sushi Kei hứa hẹn là một trong những điểm đến
                    lý tưởng cho thực khách muốn trải nghiệm và yêu ẩm thực Nhật
                    Bản.
                  </p>
                </article>
              </div>
              <div className="col-lg-7 col-md-6 col-sm-12">
                <article id="space-img">
                  <img
                    src="http://sushikei.vn/wp-content/uploads/2019/07/khong_gian_nha_hang-1.jpg"
                    className="mw-100"
                    alt=""
                  />
                </article>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className="footer"></section>
    </div>
  );
};

export default Homepage;
