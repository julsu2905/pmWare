import React, { useState, useEffect } from 'react';
import '../component-css/HomeContent.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import 'antd/dist/antd.css';
import { PlusOutlined, UserOutlined, AntDesignOutlined } from '@ant-design/icons';
import { Input, AutoComplete, Row, Col, Card, Button, Avatar, Typography, Tooltip, message, } from 'antd';
import cookies from 'react-cookies'
const { Title } = Typography;

const HomeContent = () => {
    const [projects, setProjects] = useState([])
    useEffect(async () => {
        const url = 'http://127.0.0.1:9696/api/userproject';
        const response = await axios.post(url, { jwt: cookies.load('jwt') }).catch((err) => {
            message.error(`Login fail!\n ${err.response.data.message}`)
        })
        setProjects(response.data.user.myProjects)
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
                <Tooltip title="Ant User" placement="top">
                    <Avatar className="user-A" style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                </Tooltip>
                <Avatar className="user-A" style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
            </Avatar.Group>

        </>
    );


    /*  const [initLoading, setInitLoading] = useState(true);
     const [loading, setLoading] = useState(false);
     const count = 3;
     const Data= [];
     const list = [];
     useEffect(() => {
         // Update the document title using the browser API
         getData(res => {
             setInitLoading(false)
             this.setState({
               initLoading: false,
               
             });
           });
       });
 
     const LoadItems = () => {
 
     }; */



    const [visible, setVisible] = useState(3);
    const [hiddenitem, setHiddenitem] = useState(4);
    const showMoreItem = () => {
        setVisible((prevValue) => prevValue + 3);
    };
    return (
        <>
            <Row className="search-P">
                <Col offset={16} span={6}>
                    <Complete />
                </Col>
                <Col >
                    <Link to='/projectform'>
                        <Button className="btn-plus" type="primary" icon={<PlusOutlined />} size={'large'} />
                    </Link>
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
                <Col offset={2} span={22}>

                    {projects.length > 0 ? projects.map(listItems => (
                        <>
                            <Row>
                                <Col span={8} className="box-project">
                                    <Card className="card-pro"
                                        key={listItems.key}
                                        title={listItems.title}
                                        bordered={false}
                                        extra={<a href="#">More</a>}
                                        style={{ width: 300 }}>
                                        {listItems.items.slice(0, hiddenitem).map((item) => {
                                            return (
                                                <Row key={item.key}>
                                                    <Col >
                                                        {item.title}
                                                    </Col>
                                                </Row>
                                            );
                                        })}
                                        <p>...</p>
                                        <Demo />
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col offset={9}>
                                    <button className="btn-load" onClick={showMoreItem}>Load More</button>
                                </Col>
                            </Row>
                        </>
                    )) :
                        <Row>
                            <Col offset={5}>
                                <Title level={3}>You have not participated in any project yet.</Title>
                            </Col>
                        </Row>
                    }

                </Col>
            </Row>
        </>
    );
};

export default HomeContent;