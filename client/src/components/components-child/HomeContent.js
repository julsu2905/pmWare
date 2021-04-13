import React, { useState, useEffect } from 'react';
import '../component-css/HomeContent.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import 'antd/dist/antd.css';
import { PlusOutlined, UserOutlined, AntDesignOutlined } from '@ant-design/icons';
import { Input, Form, Radio, Select, Cascader, DatePicker, InputNumber, TreeSelect, Switch, AutoComplete, Row, Col, Card, Button, Avatar, Typography, Tooltip, message, Modal } from 'antd';
import cookies from 'react-cookies'
const { Title } = Typography;

const HomeContent = () => {
    const [projects, setProjects] = useState([])
    const [projectName, setProjectName] = useState('')
    const [description, setDescription] = useState('')
    const [memberQuantity, setMemberQuantity] = useState(3)
    const [active, setActive] = useState(false)
    const [visible, setVisible] = useState(3);
    const [hiddenitem, setHiddenitem] = useState(4);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { TextArea } = Input;
    const { confirm } = Modal;
    useEffect(async () => {
        const url = 'http://127.0.0.1:9696/api/userproject';
        const response = await axios.post(url, { jwt: cookies.load('jwt') }).catch((err) => {
            message.error(`Login fail!\n ${err.response.data.message}`)
        })
        console.log(response.data)
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


    const showMoreItem = () => {
        setVisible((prevValue) => prevValue + 3);
    };


    const showModal = () => {
        setIsModalVisible(true);
    };
    const createProject = async () => {
        const url = "http://127.0.0.1:9696/api/";
        const response = await axios.post(url + 'project', {
            jwt: cookies.load('jwt'),
            projectName: projectName,
            memberQuantity: memberQuantity,
            description: description,
            active: active
        }).catch(err => {
            message.error(err);
        })

    }

    const handleOk = () => {
        createProject()
        Modal.success({
            content: 'Create project successfully.',
        });
        window.location.reload()

        setIsModalVisible(false);
    };

    const handleCancel = () => {
        confirm({
            title: 'Are you sure delete this project?',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                setIsModalVisible(false);
            },
            onCancel() {
                setIsModalVisible(true);
            },
        });

    };


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
                        <Input name="projectName"
                            onChange={(e) => setProjectName(e.target.value)} />
                    </Form.Item>
                    <Form.Item label="Project Description">
                        <TextArea name="description" rows={4} onChange={(e) => setDescription(e.target.value)} />
                    </Form.Item>
                    {/*<Form.Item label="Date Start">
                        <DatePicker />
                </Form.Item>*/}
                    <Form.Item label="Members" >
                        <InputNumber name="memberQuantity" onChange={(value) => { setMemberQuantity(value) }} min={2} max={8} defaultValue={3} />
                    </Form.Item>
                    <Form.Item label="Active">
                        <Switch name="active" onChange={(value) => setActive(value)} />
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
                    <Row>
                        {projects.length > 0 ? projects.slice(0, visible).map(project => (


                            <Col span={8} className="box-project">
                                <Card className="card-pro"
                                    key={project._id}
                                    title={project.projectName}
                                    bordered={false}
                                    extra={<Link to={`project/${project._id}`}>More</Link>}
                                    style={{ width: 300 }}>
                                    <Row >
                                        <Col >
                                            {project.description}
                                        </Col>
                                    </Row>
                                    <Demo />
                                </Card>
                            </Col>


                        )

                        ) :
                            <Row>
                                <Col offset={5}>
                                    <Title level={3}>You have not participated in any project yet.</Title>
                                </Col>
                            </Row>
                        }
                    </Row>
                    {projects.length > 0 ? < Row >
                        <Col offset={9}>
                            <button className="btn-load" onClick={showMoreItem}>Load More</button>
                        </Col>
                    </Row> : ''}

                </Col>
            </Row>


        </>
    );
};

export default HomeContent;