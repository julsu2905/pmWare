import { Col, Layout, Row } from "antd";
import React, { useState } from "react";
import './component-css/Landing.css';
const { Content } = Layout;

const Landing = () => {
  return (
    <Row>
      <Col>
          <Row className="banner-wrapper">
          <Col className="slogan-wrapper" span={16} offset={6}> 
            <Row>
              <Col>
                <h2 className="slogan">
                  Listen To The Many - Not The Money
                </h2>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="news">
          <Col>
            <div className="work-list">
              <div className="box">
                <div className="img-box">
                  <div className="cover-img">
                    <img src="./images/trello.jpg" alt="login-logo" />
                  </div>
                  <div className="cover-content">
                    <div className="content">
                      <p>Các bảng và danh sách và thẻ của Trello cho phép các nhóm tổ chức
                        và ưu tiên các dự án một cách vui vẻ linh hoạt và xứng đáng.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="img-box">
                  <div className="cover-img">
                    <img src="./images/teamwork.jpg" alt="login-logo"></img>
                  </div>
                  <div className="cover-content">
                    <div className="content">
                      <p>Todolist giúp các nhóm làm việc có tính hợp tác hơn và làm được
                nhiều hơn. </p> 
                    </div>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="img-box">
                  <div className="cover-img">
                    <img src="./images/working-bg.jpg" alt="login-logo"></img>
                  </div>
                  <div className="cover-content">
                    <div className="content">
                      <p>Giúp kiểm soát tiến độ làm việc của từng công việc một cách hệ thống và hiệu quả nhất</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row >
          <Col>
              <div className="grow">
                <div className="text-content">
                  <h1>
                    Project Power
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempora asperiores quasi distinctio, itaque dolorem sunt 
                    in incidunt vitae, odit at dignissimos tempore perspiciatis consequuntur odio, nostrum quod adipisci repellendus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempora asperiores quasi distinctio, itaque dolorem sunt 
                    in incidunt vitae, odit at dignissimos tempore perspiciatis consequuntur odio, nostrum quod adipisci repellendus!
                  </p>
                </div>
                <div className="img-content">
                  <img src="./images/business.png" alt="Grafica"/>
                </div>
              </div>
          </Col>
        </Row>
        <Row >
          <Col>
              <div className="smartphone">
                <div className="text-content">
                  <h1>
                    Convenience
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempora asperiores quasi distinctio, itaque dolorem sunt 
                    in incidunt vitae, odit at dignissimos tempore perspiciatis consequuntur odio, nostrum quod adipisci repellendus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempora asperiores quasi distinctio, itaque dolorem sunt 
                    in incidunt vitae, odit at dignissimos tempore perspiciatis consequuntur odio, nostrum quod adipisci repellendus!
                  </p>
                </div>
                <div className="img-content">
                  <img src="./images/smartphone.png" alt="Grafica"/>
                </div>
              </div>
          </Col>
        </Row>
      </Col>
    </Row>

  );
};
export default Landing;


