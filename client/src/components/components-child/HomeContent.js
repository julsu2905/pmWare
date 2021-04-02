import React, { useState,useEffect } from 'react';
import '../component-css/HomeContent.css';
import axios from 'axios';
import 'antd/dist/antd.css';
import { PlusOutlined, UserOutlined, AntDesignOutlined } from '@ant-design/icons';
import { Input, AutoComplete, Row, Col, Card, Button, Avatar, Divider, Tooltip } from 'antd';


const HomeContent = () => {
    useEffect(() => {
        const url = 'http://127.0.0.1:9696/api/project';
        const config = {
            headers:'',
        }
        axios.get(url)
    }, [])
    //Search
    function getRandomInt(max, min = 0) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const searchResult = (query) =>
        new Array(getRandomInt(5))
            .join('.')
            .split('.')
            .map((_, idx) => {
                const category = `${query}${idx}`;
                return {
                    value: category,
                    label: (
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <span>
                                Found {query} on{' '}
                                <a
                                    href={`https://s.taobao.com/search?q=${query}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {category}
                                </a>
                            </span>
                            <span>{getRandomInt(200, 100)} results</span>
                        </div>
                    ),
                };
            });

    const Complete = () => {
        const [options, setOptions] = useState([]);

        const handleSearch = (value) => {
            setOptions(value ? searchResult(value) : []);
        };

        const onSelect = (value) => {
            console.log('onSelect', value);
        };

        return (
            <AutoComplete
                dropdownMatchSelectWidth={252}
                style={{
                    width: 300,
                }}
                options={options}
                onSelect={onSelect}
                onSearch={handleSearch}
                
            >
                <Input.Search size="large" placeholder="Search Project" enterButton />
            </AutoComplete>
        );
    };

    //member
    const Demo = () => (
        <>
          <Avatar.Group className="group-user">
            <Avatar className="user-A" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <Avatar className="user-A" style={{ backgroundColor: '#f56a00' }}>K</Avatar>
            <Tooltip  title="Ant User" placement="top">
              <Avatar className="user-A" style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            </Tooltip>
            <Avatar className="user-A" style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
          </Avatar.Group>
          
        </>
      );

    return (
        <>
        <Row className="search-P">
                    <Col offset={16} span={6}>
                        <Complete />
                    </Col>
                    <Col >
                        <Button className="btn-plus" type="primary" icon={<PlusOutlined />} size={'large'} />
                    </Col>
                </Row>
                <Row>
                    <Col offset={9}>
                        <h1 className="project-title">
                            Your All Project
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col offset={3}>
                        <div className="site-card-wrapper">
                            <Row gutter={16}>
                                <Col span={8} className="box-project">
                                    <Card title="Project-1" bordered={false} extra={<a href="#">More</a>} style={{ width: 300 }}>
                                        Card content
                                        <Row>
                                            <Col offset={16}>
                                                <Demo />
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                                <Col span={8} className="box-project">
                                    <Card title="Project-2" bordered={false} extra={<a href="#">More</a>} style={{ width: 300 }}>
                                        Card content
                                        <Row>
                                            <Col offset={16}>
                                                <Demo />
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                                <Col span={8} className="box-project">
                                    <Card title="Project-3" bordered={false} extra={<a href="#">More</a>} style={{ width: 300 }}>
                                        Card content
                                        <Row>
                                            <Col offset={16}>
                                                <Demo />
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            </Row>
                        </div>,
                    </Col>
                </Row>
                <Row>
                    <Col offset={3}>
                        <div className="site-card-wrapper">
                            <Row gutter={16}>
                                <Col span={8}>
                                    <Card title="Project-4" bordered={false} extra={<a href="#">More</a>} style={{ width: 300 }}>
                                        Card content
                                        <Row>
                                            <Col offset={16}>
                                                <Demo />
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                                <Col span={8}>
                                    <Card title="Project-5" bordered={false} extra={<a href="#">More</a>} style={{ width: 300 }}>
                                        Card content
                                        <Row>
                                            <Col offset={16}>
                                                <Demo />
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                                <Col span={8}>
                                    <Card title="Project-6" bordered={false} extra={<a href="#">More</a>} style={{ width: 300 }}>
                                        Card content
                                        <Row>
                                            <Col offset={16}>
                                                <Demo />
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            </Row>
                        </div>,
                    </Col>
                </Row>
        </>
    );
};

export default HomeContent;