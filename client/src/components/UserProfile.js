import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Image, Space, Input, Button } from 'antd';
import './component-css//UserProfile.css';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import cookies from 'react-cookies'
import { useHistory } from "react-router-dom";
import axios from "axios"
const { TextArea } = Input;


class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.user_id,
            username: this.props.username,
            email: this.props.email,
            profileImage: this.props.profileImage,
            msg: this.props.msg,
            uploadedFile: null
        }
    }
    componentDidMount() {
        if (!cookies.load('jwt')) {
            window.location = '/'
            window.location.reload()
        }
    }

    render() {


        return (
            <Container>
                <Row>
                    <Col>
                        <Image
                            width={200}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                    </Col>
                    <Col>
                        <h1>User Profile</h1>
                        <Form className="form">
                            <p>{this.state.msg}</p>

                            <Space direction="vertical">
                                <Form.Group controlId="formCategory4">
                                    <Form.Label>Profile Image</Form.Label>
                                    <Form.Control type="file" name="profileImage" onChange={this.changeProfileImage} />
                                </Form.Group>
                                <Input placeholder="User name" />
                                <Input.Password
                                    placeholder="Password"
                                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                />
                                <Input placeholder="E-meow" />
                                <TextArea placeholder="Bio" />
                                <Button type="primary" onClick={this.UpdateProfileHandler}>Update Profile</Button>
                            </Space>,
                        </Form>
                    </Col>

                </Row>
            </Container>
        )
    }
}



export default UserProfile;
