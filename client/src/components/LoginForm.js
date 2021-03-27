import { Form, Col, Row, Input, Button, Checkbox, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import axios from "axios"
import "./component-css/LoginForm.css";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.login = this.login.bind(this)
    this.state = {
      username: '',
      password: ''
    }
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  async login() {
    const url = "http://127.0.0.1:9696/api/login"
    console.log(this.state.username + "/" + this.state.password)
    axios.post(url, { email: this.state.username, password: this.state.password } ).then(async res => {
      await console.log(res)
      if (res.data.status === "success") {
        message.success('Login successful!')
        await setTimeout(() => { }, 3000)
        window.location = "http://127.0.0.1:3000/home";
      }
    }).catch(err => {
      message.error(`Login fail!\n ${err.response.data.message}`)
    })

  }
  render() {
    return (
      <Row className="login-container">
        <Col offset={8} className="login-form-wrapper" span={8}>
          <h1 id='login-title'>
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
            onFinish={this.login}
            size="large"
          >
            <Form.Item
              name="username"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
                name="username"
                onChange={this.handleChange}
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
                name="password"
                onChange={this.handleChange}
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
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    )
  }
}
