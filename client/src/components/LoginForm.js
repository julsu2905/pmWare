import { Form, Col, Row, Input, Button, Checkbox, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import axios from "axios";
import cookie from "react-cookie";
import "./component-css/LoginForm.css";
import { useHistory } from "react-router-dom";
import jwt from "jsonwebtoken";
const { promisify } = require("util");

const LoginForm = () => {
  const histor = useHistory();

  const isLoggedIn = async (data) => {
    const decoded = await promisify(jwt.verify)(
      data.token,
      'my-password-secret'
    )
    const url = "http://127.0.0.1:9696/api/user/";
    axios.get(url + decoded.id).then(res => {
      return true
    }).catch(err => {
      message.error(`You is not logged in!\n ${err.response.data.message}`)
      return false
    })
  }

  const login = (values) => {
    const url = "http://127.0.0.1:9696/api/login";
    axios
      .post(url, values)
      .then((res) => {
        if (res.data.status === "success") {
          message.success("Login successful!")
          if (isLoggedIn(res.data)) {
            cookies.save('username', res.data.data.user.username)
            cookies.save('email', res.data.data.user.email)
            cookies.save('myProjects', res.data.data.user.myProjects)
            cookies.save('userTasks', res.data.data.user.userTasks)
          }
          setTimeout( async() => {
            await histor.push("/")
            window.location.reload()
          }, 2000)
        }

      })
      .catch((err) => {
        message.error(`Login fail!\n ${err.response.data.message}`)
      })
  }

  return (
    <Row className="login-container">
      <Col offset={8} className="login-form-wrapper" span={8}>
        <h1 id="login-title">
          <img
            width="90"
            height="100"
            src="./images/login-logo2.gif"
            alt="login-logo"
          ></img>
          LOGIN
        </h1>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={login}
          size="large"
        >
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <a href="/register">register now!</a>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};
export default LoginForm;
