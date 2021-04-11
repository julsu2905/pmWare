import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Modal, Button,Input  } from 'antd';
import Addmembers from './Addmembers';
import '../component-css/Addmembers.css'

export default function ModalAddmembers() {
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
    return (
        <>
        <Button type="primary" onClick={showModal} style={{fontSize:"16px",
        fontStyle:"initial"
      }} >
          +
        </Button>
        <Modal title="User Asiggned" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

        <Input placeholder="Gmail or Username"/>
        </Modal>
      </>
    )
}
