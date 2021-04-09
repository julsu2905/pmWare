import React, { useState, useEffect } from 'react';
import '../component-css/HomeContent.css';
import axios from 'axios';
import 'antd/dist/antd.css';
import { PlusOutlined, UserOutlined, AntDesignOutlined } from '@ant-design/icons';
import { Input, Form, Radio, Select, Cascader, DatePicker, InputNumber, TreeSelect, Switch, AutoComplete, Row, Col, Card, Button, Avatar, Typography, Tooltip, message, Modal } from 'antd';
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
    const menuItems = [
        {
            key: "introduction",
            title: "Project 1",
            items: [
                { key: "su-menh", title: "Sứ mệnh, Tầm nhìn, Giá trị cốt lõi" },
                { key: "shareholder", title: "Các cổ đông" },
                { key: "history", title: "Lịch sử hình thành" },
                { key: "organization-chart", title: "Sơ đồ tổ chức" },
                { key: "ky-yeu", title: "Kỷ yếu 20 năm" },
                { key: "inbound-certifications", title: " Các chứng chỉ nghiệp vụ" },
            ],
        },
        {
            key: "service",
            title: "Project 2",
            items: [
                { key: "export", title: "Phục vụ hàng xuất" },
                { key: "import", title: "Phục vụ hàng nhập" },
                { key: "office-for-lease", title: "Văn phòng cho thuê" },
                { key: "trung-tam-dao-tao", title: "Dịch vụ Đào tạo" },
                { key: "other", title: "Các dịch vụ khác" },
                { key: "handling-charges", title: "Bảng giá dịch vụ" },
                { key: "registration-form", title: "Các biểu mẫu đăng ký" },
            ],
        },
        {
            key: "guide",
            title: "Project 3",
            items: [
                { key: "collect-cargo", title: "Nhận hàng quốc tế" },
                { key: "access-imp", title: "Thủ tục nhận hàng hàng nhập" },
                { key: "dispatch-cargo", title: "Gửi hàng quốc tế" },
                { key: "custom-procedure", title: "Thủ tục hải quan" },
                { key: "other", title: "Kỷ yếu 20 năm" },
            ],
        },
        {
            key: "news",
            title: "Project 4",
            items: [
                { key: "customer-news", title: "Tin dành cho khách hàng" },
                { key: "airfreight-news", title: "Tin chuyên ngành" },
                { key: "dispatch-cargo", title: "Gửi hàng quốc tế" },
                { key: "internal-news", title: "Tin nội bộ" },
                { key: "career-news", title: "Tin tuyển dụng và đào tạo" },
            ],
        },
        {
            key: "statistic",
            title: "Project 5",
            items: [
                { key: "customer-news", title: "Tin dành cho khách hàng" },
                { key: "airfreight-news", title: "Tin chuyên ngành" },
                { key: "dispatch-cargo", title: "Gửi hàng quốc tế" },
                { key: "internal-news", title: "Tin nội bộ" },
            ],
        },
        {
            key: "home", title: "Project 6", items: [
                { key: "su-menh", title: "Sứ mệnh, Tầm nhìn, Giá trị cốt lõi" },
                { key: "shareholder", title: "Các cổ đông" },
                { key: "history", title: "Lịch sử hình thành" },
                { key: "organization-chart", title: "Sơ đồ tổ chức" },
                { key: "ky-yeu", title: "Kỷ yếu 20 năm" },
                { key: "inbound-certifications", title: " Các chứng chỉ nghiệp vụ" }
            ]
        },
    ];

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

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const { TextArea } = Input;


    return (
        <>
            <Modal
                title="Create Project"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                centered
                width={1000}
                closable={false}
                maskClosable={false}
                okText="Create"
            >


                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                >
                    <Form.Item label="Project Name">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Project Description">
                        <TextArea rows={4} />
                    </Form.Item>
                    {/* <Form.Item label="TreeSelect">
                        <TreeSelect
                            treeData={[
                                { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item label="Cascader">
                        <Cascader
                            options={[
                                {
                                    value: 'zhejiang',
                                    label: 'Zhejiang',
                                    children: [
                                        {
                                            value: 'hangzhou',
                                            label: 'Hangzhou',
                                        },
                                    ],
                                },
                            ]}
                        />
                    </Form.Item> */}
                    <Form.Item label="Date Start">
                        <DatePicker />
                    </Form.Item>
                    <Form.Item label="InputNumber">
                        <InputNumber />
                    </Form.Item>
                    <Form.Item label="Status">
                        <Switch />
                    </Form.Item>
                </Form>



            </Modal>

            <Row className="search-P">
                <Col offset={16} span={6}>
                    <Complete />
                </Col>
                <Col >
                    <Button className="btn-plus" type="primary" icon={<PlusOutlined />} size={'large'}
                        onClick={showModal}
                    ></Button>
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