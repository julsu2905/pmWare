import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Modal, Button,Input  } from 'antd';
import Addmembers from './Addmembers';

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
        <Button type="primary" onClick={showModal}>
          +
        </Button>
        <Modal title="User Asiggned" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Addmembers/>
        <Input/>
        </Modal>
      </>
    )
}
